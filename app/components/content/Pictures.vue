/*

This component supports up to three images, intended to be used in flow of an article

Usage:

::pictures
---
image1: '/images/demo/roxie-02.jpeg'
image2: '/images/demo/roxie-03.jpeg'
image3: '/images/demo/roxie-04.JPG'
classes: -mx-8
aspectRatio: 'square'
---

*/

<script setup lang="ts">
const props = defineProps<{
  image1: string // required
  image2?: string // optional
  image3?: string // optional
  aspectRatio?: '4:3' | '16:9' | 'letterbox' | 'square' // optional, defaults to natural aspect
  classes?: string // optional tailwind classes can be passed here (separated with a space)
}>()

const images = computed(() => [props.image1, props.image2, props.image3].filter(Boolean))

const gridColsClass = computed(() => {
  return {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }[images.value.length] || 'grid-cols-1'
})

const aspectRatioClass = computed(() => {
  switch (props.aspectRatio) {
    case '4:3':
      return 'aspect-[4/3]'
    case '16:9':
      return 'aspect-video'
    case 'square':
      return 'aspect-square'
    case 'letterbox':
      return 'custom-letterbox'
    default:
      return '' // Default to natural aspect
  }
})
</script>

<template>
  <div class="mb-4 grid gap-4" :class="[gridColsClass, classes]">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="object-cover"
      :class="[aspectRatioClass]"
    >
  </div>
</template>

<style scoped>
.custom-letterbox {
  @apply aspect-[300/100];
}
</style>
