<template>
  test
  <input type="text" v-model="appId" />
  <button @click="onLogin">Facebook Login</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { FacebookSdk } from "@/components/facebookSdk";

export default defineComponent({
  name: "FacebookLoginForm",
  async setup() {
    const facebookSdk = new FacebookSdk();
    const appId = ref("");
    const onLogin = () => {
      facebookSdk.init(appId.value);
    };
    return {
      appId,
      onLogin
    };
  }
});
</script>
