<script setup lang="ts">

</script>

<template>
  <Header />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<style>
@import url('/node_modules/@iamproperty/components/assets/css/core.min.css');
@import url('/assets/css/main.css');

@tailwind components;
@tailwind utilities;

@layer overrides {
  @media (prefers-reduced-motion) {
   * {
    transition: unset;
    animation: none;
   }
  }
}
</style>
