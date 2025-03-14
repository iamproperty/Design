<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('~/node_modules/@iamproperty/components/assets/js/components/nav/nav.component.min').then((module) => {
    if (!window.customElements.get('iam-nav'))
      window.customElements.define('iam-nav', module.default)
  })
})
</script>


<template>
<nav>
  <iam-nav>
  <a href="/" class="brand brand--property" slot="logo">
    <svg>
      <title>iamproperty</title>
      <use xlink:href="../../assets/images/svg/logo.svg#logo-property"></use>
    </svg>
  </a>

  <NuxtLink to="/" active-class="selected">Home</NuxtLink>
  <NuxtLink to="#" active-class="selected">The team</NuxtLink>
  <NuxtLink to="#" active-class="selected">Our principles</NuxtLink>
  <NuxtLink to="#" active-class="selected">Articles</NuxtLink>

  <a class="btn btn-primary d-sm-inline-flex mt-6 lg:mt-0" href="https://iamproperty.github.io/">Design System</a>
</iam-nav>
</nav>
</template>

<style>

</style>