<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <div class="mb-4 flex items-center gap-4 rounded border-2 border-indigo-400 p-4">
    <div class="flex size-14 items-center justify-center rounded-full bg-indigo-50 p-2">
      <Icon :name="icon" class="text-2xl" />
    </div>
    <ContentSlot :use="$slots.default" />
    <!-- define named slots by using `$slots.header` or `$slots.body` etc. -->
  </div>
</template>

<style scoped>
  div * {
    @apply m-0;
  }
</style>
