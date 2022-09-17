<script setup>
import { mdiAccount, mdiAsterisk } from "@mdi/js";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});

const submit = () => {
  navigateTo("/dashboard");
};
</script>
    
<template>
  <div>
    <NuxtLayout>
      <div class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
        <CardBox is-form @submit.prevent="submit">
          <FormField label="Login" help="Please enter your login">
            <FormControl
              v-model="form.login"
              name="login"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Password" help="Please enter your password">
            <FormControl
              v-model="form.pass"
              type="password"
              name="password"
              autocomplete="current-password"
            />
          </FormField>

          <FormCheckRadio
            v-model="form.remember"
            name="remember"
            label="Remember"
            :input-value="true"
          />

          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/dashboard" color="info" outline label="Back" />
          </BaseButtons>
        </CardBox>
      </div>
    </NuxtLayout>
  </div>
</template>
    