<script lang="ts" setup>
const { data } = await useAsyncData(() =>
  queryContent('blog')
    .sort({ date: -1 })
    .find(),
)

// Extract the featured image or find the first image in the content
function getArticleImage(article: any): string {
  // Check if a featured image is defined in the frontmatter
  if (article.featuredImage)
    return article.featuredImage

  // Check the body content for the first image
  const imageRegex = /!\[.*?\]\((.*?)\)/ // Matches markdown images: ![alt](url)
  const match = imageRegex.exec(article.body)
  return match ? match[1] : ''
}

// Navigate to the article's page
function navigateToArticle(path?: string) {
  if (path)
    useRouter().push(path)
}
</script>

<template>
  <main>
    <h1>Articles</h1>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="article in data"
        :key="article._path"
        class="relative cursor-pointer rounded bg-slate-800 transition-all hover:scale-110"
        @click="navigateToArticle(article._path)"
      >
        <!-- Featured Image -->
        <img
          v-if="getArticleImage(article)"
          :src="getArticleImage(article)"
          :alt="article.title"
          class="absolute inset-0 z-10 size-full object-cover opacity-30"
        >
        <div class="relative z-20 h-full p-4">
          <h3 class="line-clamp-2">
            {{ article.title }}
          </h3>
          <p class="line-clamp-3 text-lg">
            {{ article.description }}
          </p>
          <div v-if="article.date" class="mt-8 text-sm font-bold">
            Published on: {{ article.date }}
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{ data }}</pre> -->
  </main>
</template>

<style>

</style>
