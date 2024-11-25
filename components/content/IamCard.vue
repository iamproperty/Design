<script setup lang="ts">
const props = defineProps<{
  link: string
}>()

import { onMounted } from 'vue'

onMounted(() => {
  import('~/node_modules/@iamproperty/components/assets/js/components/card/card.component.min.js').then((module) => {
    if (!window.customElements.get('iam-card'))
      window.customElements.define('iam-card', module.default)
  })
})
</script>

<template>
  <a :href="props.link" v-if="props.link"><iam-card v-bind="$attrs"><ContentSlot :use="$slots.default" unwrap="p" /></iam-card></a>
  <iam-card v-else><ContentSlot :use="$slots.default" unwrap="p" /></iam-card>
</template>
