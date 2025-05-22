<script setup lang="ts">
const props = defineProps<{
  link: string
  type?: string
  icon?: string
  iconAfter?: string
}>()

const type = props.type ? props.type : 'primary'
</script>

<template>
  <a :href="props.link" :class="`btn btn-${type}`"><i v-if="props.icon" :class="props.icon"></i><slot></slot><i v-if="props.iconAfter" :class="props.iconAfter"></i></a>
</template>
