<script setup lang="ts">
const props = defineProps<{
  bg?: string
  image?: string
}>()

import { onMounted } from 'vue'

onMounted(() => {
  import('~/node_modules/@iamproperty/components/assets/js/components/header/header.component.min.js').then((module) => {
    if (!window.customElements.get('iam-header'))
      window.customElements.define('iam-header', module.default)
  })
})
</script>

<template>
  <iam-header v-bind="$attrs" class="bg-primary" v-if="props.bg">
    <slot></slot>
  </iam-header>
  <div class="container bg-info gradient-primary gradient-direction-left mb-5 invert-colours" v-else>
    <div class="md-col-end-7">
      <slot></slot>
    </div>
    <div class="md-col-start-9">
      <img :src="props.image" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.md-col-end-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
