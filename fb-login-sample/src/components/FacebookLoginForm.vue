<template>
  <div>
    appId: <input type="text" v-model="appId" />
    <br />
    appSecrets: <input type="text" v-model="appSecrets" />
    <br />
    accessToken: {{ accessToken }}
    <br />
    long accessToken: {{ longAccessToken }}
    <br />
    Facebook Page ID: <input type="text" v-model="facebookPageId" />
    <br />
    Instagram Business ID: <input type="text" v-model="instagramBusinessId" />
    <ul>
      <li><button @click="onInit">Facebook App Init</button></li>
      <li><button @click="onLogin">Login</button></li>
      <li><button @click="onLogout">Logout</button></li>
      <li><button @click="onGetLoginStatus">Get Login Status</button></li>
      <li>
        <button @click="onGetLongAccessToken">Get Long Access Token</button>
      </li>
      <li>
        <button @click="onGetMeAccount">Get Me Account</button>
      </li>
      <li>
        <button @click="onGetInstagramBisinessAccount">
          Get Instagram Bisiness Account
        </button>
      </li>
      <li>
        <button @click="onGetMedia">
          Get Media
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, ref } from "vue";
import { FacebookSdk } from "@/components/facebookSdk";

export default defineComponent({
  name: "FacebookLoginForm",
  setup() {
    const facebookSdk = new FacebookSdk();
    const appId = ref(process.env.VUE_APP_FACEBOOK_APP_ID || "");
    const appSecrets = ref(process.env.VUE_APP_FACEBOOK_APP_SECRETS || "");
    const accessToken = ref("");
    const longAccessToken = ref("");
    const facebookPageId = ref("");
    const instagramBusinessId = ref("");

    const onInit = () => {
      facebookSdk
        .init(appId.value)
        .then((fb: Facebook) => {
          console.log(fb);
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    const onLogin = () => {
      facebookSdk.login(
        (response: FacebookCallbackResponse) => {
          console.log({
            response,
            accessToken
          });
          accessToken.value = response.authResponse.accessToken;
        },
        {
          scope: "instagram_basic,pages_show_list",
          return_scopes: true
        }
      );
    };
    const getAccessToken = (): string => {
      return longAccessToken.value || accessToken.value || "";
    };
    const onLogout = () => {
      facebookSdk.logout();
    };
    const onGetLoginStatus = () => {
      facebookSdk.getLoginStatus();
    };

    // https://developers.facebook.com/docs/instagram-api/getting-started Step3
    const onGetLongAccessToken = async () => {
      const params = new URLSearchParams({
        grant_type: "fb_exchange_token",
        client_id: appId.value,
        client_secret: appSecrets.value,
        fb_exchange_token: getAccessToken() // Long Access Tokenでもいける
      });
      const response = await fetch(
        "https://graph.facebook.com/oauth/access_token?" + params
      );
      const json = await response.json();
      longAccessToken.value = json.access_token;
      console.log({
        response,
        json,
        access_token: json.access_token
      });
    };

    // https://developers.facebook.com/docs/instagram-api/getting-started Step4
    const onGetMeAccount = async () => {
      const params = new URLSearchParams({
        access_token: getAccessToken()
      });
      const response = await fetch(
        "https://graph.facebook.com/v8.0/me/accounts?" + params
      );
      const json: FacebookMeResponse = await response.json();
      if (json.data && json?.data?.length > 0) {
        facebookPageId.value = json.data[0].id;
      }
      console.log({
        json
      });
    };

    // GET /{page-id}?fields=instagram_business_account Step5
    const onGetInstagramBisinessAccount = async () => {
      const params = new URLSearchParams({
        fields: "instagram_business_account",
        access_token: getAccessToken()
      });
      const response = await fetch(
        `https://graph.facebook.com/v9.0/${facebookPageId.value}?` + params
      );
      const json: {
        id?: string;
        instagram_business_account?: { id: string };
      } = await response.json();
      instagramBusinessId.value = json?.instagram_business_account?.id || "";
      console.log({
        json
      });
    };

    // https://developers.facebook.com/docs/instagram-api/reference/media/
    const onGetMedia = async () => {
      const params = new URLSearchParams({
        fields: "name,media{caption,media_url,permalink,timestamp,username}",
        access_token: getAccessToken()
      });
      const response = await fetch(
        `https://graph.facebook.com/v9.0/${instagramBusinessId.value}?` + params
      );
      const json = await response.json();
      console.log({
        json
      });
    };
    return {
      appId,
      appSecrets,
      accessToken,
      longAccessToken,
      facebookPageId,
      instagramBusinessId,
      onInit,
      onLogin,
      onLogout,
      onGetLoginStatus,
      onGetLongAccessToken,
      onGetMeAccount,
      onGetInstagramBisinessAccount,
      onGetMedia
    };
  }
});
</script>
