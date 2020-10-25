<template>
  <div>
    test
    <facebook-login-form></facebook-login-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FacebookLoginForm from "@/components/FacebookLoginForm.vue";

export default defineComponent({
  name: "App",
  components: {
    FacebookLoginForm
  }
});
</script>

<style></style>
