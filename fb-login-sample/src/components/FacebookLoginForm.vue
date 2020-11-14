<template>
  <div>
    <div>
      <h2>Step1 Facebook JavaScript SDKの初期化</h2>
      <p>appId: <input type="text" v-model="appId" /></p>
      <p>appSecrets: <input type="text" v-model="appSecrets" /></p>
      <button @click="onInit">Facebook App Init</button>
      <p style="color: red;">{{ facebookSdkInitStatus }}</p>
    </div>
    <div>
      <h2>Step2 Facebookログイン</h2>
      <button @click="onLogin">Login</button>
      <p>accessToken: {{ accessToken }}</p>
    </div>
    <div>
      <h2>Step3 長期トークンの取得</h2>
      <button @click="onGetLongAccessToken">Get Long Access Token</button>
      <p>long accessToken: {{ longAccessToken }}</p>
    </div>
    <div>
      <h2>Step4 Facebook Page IDの取得</h2>
      <button @click="onGetMeAccount">Get Me Account</button>
      <p>Facebook Page ID: <input type="text" v-model="facebookPageId" /></p>
    </div>
    <div>
      <h2>Step5 Instagram Business Account IDの取得</h2>
      <button @click="onGetInstagramBusinessAccount">
        Get Instagram Business Account
      </button>
      <p>
        Instagram Business ID:
        <input type="text" v-model="instagramBusinessId" />
      </p>
    </div>
    <div>
      <h2>Step6 Instagram Mediaの取得</h2>
      <button @click="onGetMedia">
        Get Media</button
      ><br />
      <img :src="instagramMediaSrc" width="400" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, ref, computed } from "vue";
import { FacebookSdk } from "@/components/facebookSdk";

export default defineComponent({
  name: "FacebookLoginForm",
  setup() {
    const facebookSdk = new FacebookSdk();
    const isFacebookSdkInitialized = ref(false);
    const appId = ref(process.env.VUE_APP_FACEBOOK_APP_ID || "");
    const appSecrets = ref(process.env.VUE_APP_FACEBOOK_APP_SECRETS || "");
    const accessToken = ref("");
    const longAccessToken = ref("");
    const facebookPageId = ref("");
    const instagramBusinessId = ref("");
    const instagramMediaSrc = ref("");

    const facebookSdkInitStatus = computed(() =>
      isFacebookSdkInitialized.value ? "成功!!" : "まだ..."
    );

    const onInit = () => {
      facebookSdk
        .init(appId.value)
        .then((fb: Facebook) => {
          isFacebookSdkInitialized.value = true;
          console.log(fb);
        })
        .catch((error: any) => {
          isFacebookSdkInitialized.value = false;
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
    const onGetInstagramBusinessAccount = async () => {
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
      if (json.media.data && json.media.data.length > 0) {
        instagramMediaSrc.value = json.media.data[0].media_url;
        console.log({
          instagramMediaSrc,
          data: json.media.data
        });
      }
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
      instagramMediaSrc,
      facebookSdkInitStatus,
      onInit,
      onLogin,
      onLogout,
      onGetLoginStatus,
      onGetLongAccessToken,
      onGetMeAccount,
      onGetInstagramBusinessAccount,
      onGetMedia
    };
  }
});
</script>

<style scoped>
h2 {
  margin-top: 0;
  margin-bottom: 8px;
}
div {
  margin-top: 0;
  margin-bottom: 16px;
}
p {
  margin: 0;
}
</style>
