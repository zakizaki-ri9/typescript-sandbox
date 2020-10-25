<template>
  <div>
    appId: <input type="text" v-model="appId" />
    <ul>
      <li><button @click="onInit">Facebook App Init</button></li>
      <li><button @click="onLogin">Login</button></li>
      <li><button @click="onLogout">Logout</button></li>
      <li><button @click="onGetLoginStatus">Get Login Status</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { FacebookSdk } from "@/components/facebookSdk";

export default defineComponent({
  name: "FacebookLoginForm",
  setup() {
    const facebookSdk = new FacebookSdk();
    const appId = ref("");

    const onInit = () => {
      facebookSdk
        .init(appId.value)
        .then((fb: any) => {
          console.log(fb);
        })
        .catch((error: any) => {
          console.error(error);
        });
    };
    const onLogin = () => {
      facebookSdk.login();
    };
    const onLogout = () => {
      facebookSdk.logout();
    };
    const onGetLoginStatus = () => {
      console.log({
        loginStatus: facebookSdk.getLoginStatus()
      });
    };
    return {
      appId,
      onInit,
      onLogin,
      onLogout,
      onGetLoginStatus
    };
  }
});
</script>
