<script setup lang="ts">
const route = useRoute()

const [prev, next] = await queryContent()
  .only(['_path', 'title'])
  .sort({ date: -1 })
  .findSurround(route.path)
</script>

<template>
  <main class="m-auto max-w-3xl">
    <ContentDoc />

    <!-- Next / Previous Links -->
    <div class="mt-20 flex">
      <NuxtLink v-if="prev" :to="prev._path" class="flex-1 border border-solid border-gray-800 bg-gray-900 p-4 text-center transition-all hover:bg-gray-950">
        <div class="text-lg font-bold">
          Previous Article
        </div>
        <div class="text-sm italic">
          {{ prev.title }}
        </div>
      </NuxtLink>

      <NuxtLink v-if="next" :to="next._path" class="flex-1 border border-solid border-gray-800 bg-gray-900 p-4 text-center transition-all hover:bg-gray-950">
        <div class="text-lg font-bold">
          Next Article
        </div>
        <div class="text-sm italic">
          {{ next.title }}
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
:deep(p) {
  @apply mb-4;
}
</style>
