<template>
  <div class="container mb-5 text-center">
    <div class="dscta">
      <div class="bg-primary">
        <slot></slot>
      </div>
      <a href="https://iamproperty.github.io/" class="btn btn-primary">Design System</a>
      <span class="bg-image"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  container-type: inline-size;
}

.dscta {
  border-radius: 1rem;
  padding-top: 3rem;
  padding-bottom: 7rem;
  position: relative;
  overflow: hidden;
  padding-inline: 1.5rem;
  background: var(--colour-primary);

  .bg-image {

    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    width: 40rem;
    height: 8rem;
    background-image: url("/images/dscta.png");
    background-size: cover;
    transform: translate(-50%, 0);
  }

  @container (min-width: 36em) {

    padding-inline: 3rem;
    padding-bottom: 9rem;

    .bg-image {

      width: 70rem;
      height: 12rem;
    }
  }
}
.container > *,
.bg-primary > * {
  margin-inline: auto;
}
</style>
