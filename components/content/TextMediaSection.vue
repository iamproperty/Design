<script lang="ts" setup>
const props = defineProps(['mediaFirst'])
</script>

<template>
  <section class="container d-grid pt-12" :class="{ 'media-first': props.mediaFirst }">
    <div class="text-content">
      <slot name="text" />
    </div>
    <div class="media-content">
      <slot name="media" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    padding-block: 3.75rem;
  }

  @media screen and (min-width: 62rem) {
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 0 4rem;

      &:before {
        grid-column: 1 / -1;
      }
    }

    .media-first {
      .media-content {
        grid-column: 1;
        grid-row: 1;
      }

      .text-content {
        grid-column: 2;
        grid-row: 1;
      }
    }
  }
</style>
