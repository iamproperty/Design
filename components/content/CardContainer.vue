<template>
    <div class="card-wrap col-span-full d-flex flex-wrap justify-center p-6">
        <slot name="cards" />
    </div>
</template>

<style lang="scss">
  .card-wrap {
    padding-block: 2rem;
    gap: 2rem 1rem;

    > iam-card,
    a {
      width: 100%;
      max-width: 22.5rem;
    }
  }
</style>
