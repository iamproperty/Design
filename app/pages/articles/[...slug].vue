<script setup lang="ts">
import { onMounted, ref } from 'vue'

const route = useRoute()

const { data: related } = await useFetch(`/api/articles?limit=3`);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useHead({
  title: page.value?.seo.title,
})

onMounted(() => {
  import('@@/node_modules/@iamproperty/components/assets/js/components/card/card.component.min.js').then((module) => {
    if (!window.customElements.get('iam-card'))
      window.customElements.define('iam-card', module.default)
  })
  import('@@/node_modules/@iamproperty/components/assets/js/components/carousel/carousel.component.min.js').then((module) => {
    if (!window.customElements.get('iam-carousel'))
      window.customElements.define('iam-carousel', module.default)
  })
});
</script>

<template>
  <main class="pb-0">
    <div class="meta pb-5">
      <ul class="breadcrumb">
        <li><NuxtLink to="/articles">Blog</NuxtLink></li>
      </ul>
      <span class="h1">{{ page.title }}</span>
      <p class="pb-3">{{ page.description }}</p>
      <small class="d-block pb-4">{{ page?.meta.info }}</small>
      <img :src="page?.meta.featuredImage" />
    </div>
    <ContentRenderer v-if="page" :value="page" class="d-block md-col-start-3 md-col-end-10" />

    <h2 class="pt-5">Related articles</h2>
    <iam-carousel class="mb-2" data-mdcols="3">
      <div v-for="article in related" :key="article.path">
        <NuxtLink :to="article.path">
          <iam-card :data-image="article.meta.featuredImage">
            <h3 class="h2">{{ article.title }}</h3>
            <p>
              {{ article.description }}
            </p>
          </iam-card>
        </NuxtLink>
      </div>
    </iam-carousel>
  </main>
</template>

<style scoped>
[data-content-id] > * {
  margin-block: auto;
}

[data-content-id] > h1 {
  display: none;
}

iam-carousel a {
  height: 100%;
}
</style>
