<template>
  <form class="m-8" @submit.prevent="onSubmit">
    <div class="mb-4">
      <input v-model="form.email.$value" type="email" />
      <span v-if="form.email.$error" :class="$style.error">
        email: {{ form.email.$error.message }}
      </span>
    </div>

    <div>
      <input v-model="form.password.$value" type="password" />
      <span v-if="form.password.$error" :class="$style.error">
        password: {{ form.password.$error.message }}
      </span>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"
import { defineForm, field, isValidForm } from "vue-yup-form"
import * as yup from "yup"

const form = shallowRef(
  defineForm({
    email: field("", yup.string().email().required()),
    password: field("", yup.string().required()),
  })
)

const onSubmit = () => {
  console.log({
    form: form.value,
    isValidForm: isValidForm(form.value),
  })
  return
}
</script>

<style lang="scss" module>
.error {
  color: red;
}
</style>
