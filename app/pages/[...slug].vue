<script setup lang="ts">
const route = useRoute()


const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useHead({
  title: page.value?.seo.title,
})
</script>

<template>
  <main class="pb-0">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>
