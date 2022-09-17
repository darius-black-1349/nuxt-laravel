<script setup>
definePageMeta({
  layout: "authenticated",
  middleware: ["auth"],
});
</script>
    
<template>
  <div>
    <NuxtLayout></NuxtLayout>
  </div>
</template>