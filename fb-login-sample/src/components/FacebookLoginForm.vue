<template>
  <div>
    appId: <input type="text" v-model="appId" />
    <br />
    appSecrets: <input type="text" v-model="appSecrets" />
    <br />
    accessToken: {{ accessToken }}
    <br />
    long accessToken: {{ longAccessToken }}
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
      const json = await response.json();
      console.log({
        response,
        json
      });
    };
    return {
      appId,
      appSecrets,
      accessToken,
      longAccessToken,
      onInit,
      onLogin,
      onLogout,
      onGetLoginStatus,
      onGetLongAccessToken,
      onGetMeAccount
    };
  }
});
</script>
