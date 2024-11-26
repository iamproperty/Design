<template>
  <div class="invert-colours bg-info gradient-primary gradient-direction-angle" v-if="true">
    <div class="container pt-5 pb-5 min-vh-100 d-md-flex">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h1>This page is down for maintenance</h1>
          <p>We're busy updating the design site. We'll be back up and running again shortly.</p>
          <p>In the meantime, please take this opportunity to visit our iamkey design system.</p>
          <span class="reset-colours"><a href="https://iamproperty.github.io/" class="btn btn-primary">Design System</a></span>
        </div>
        <div class="col-8 col-sm-10 col-md-5 ms-auto me-auto">
          <img class="d-block ms-auto me-auto" src="./assets/images/illustrations/contractors.png" />
      </div>
      </div>
    </div>
  </div>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('/node_modules/@iamproperty/components/assets/css/core.min.css');
@import url('/assets/css/main.css');

@tailwind components;
@tailwind utilities;

@layer overrides {
  @media (prefers-reduced-motion) {
   * {
    transition: unset;
    animation: none;
   }
  }
}
</style>
