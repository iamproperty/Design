<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('~/node_modules/@iamproperty/components/assets/js/components/card/card.component.min.js').then((module) => {
    if (!window.customElements.get('iam-card'))
      window.customElements.define('iam-card', module.default)
  })
})
</script>

<template>
  <iam-card><ContentSlot :use="$slots.default" unwrap="p" /></iam-card>
</template>
