<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()

import { onMounted } from 'vue'

onMounted(() => {
  import('@@/node_modules/@iamproperty/components/assets/js/components/bento-grid/bento-grid.component.min.js').then((module) => {
    if (!window.customElements.get('iam-bento-grid'))
      window.customElements.define('iam-bento-grid', module.default)
  })
})
</script>

<template>
  <iam-bento-grid>
    <details class="bg-info gradient-primary gradient-direction-left invert-colours" style="--bg: url(/images/bento/bento1.png);">
      <summary class="h3">The teams <span role="presentation">Find out more</span></summary>
      <p>We combine the power of two teams to bring the the experience and interactions within our products to life.</p>
      <p>Product Design team:</p>
      <ul>
        <li>User research and analysis</li>
        <li>Concept development</li>
        <li>Interaction and visual design</li>
        <li>Usability testing and validation</li>
      </ul>
      <p>Frontend Tech team:</p>
      <ul>
        <li>Writing clean code</li>
        <li>Maintaining Accessibility</li>
        <li>Performance enhancement</li>
        <li>Continual Improvement and maintenance</li>
      </ul>
      <a href="/our-teams" class="btn btn-primary"><i class="fa-solid fa-code" aria-hidden="true"></i>Our teams</a>
    </details>
    <details class="bg-primary" style="--bg: url(/images/bento/bento1.png);">
      <summary class="h3">How we work <span role="presentation">Find out more</span></summary>
      <p>We collaborate across all phases of project, from discovery to delivery. Working closely to achieve the best outcomes for our customers.</p>
      <p class="pb-1">Our team success comes from three key qualities:</p>
      <ul>
        <li>Aligning goals</li>
        <li>Communication</li><li>Feedback</li>
      </ul>
      <a href="/our-principles" class="btn btn-primary"><i class="fa-solid fa-code" aria-hidden="true"></i>Our principles<!----></a>
    </details>
    <details class="bg-primary" style="--bg: url(/images/bento/bento1.png);">
      <summary class="h3">Areas we cover <span role="presentation">Find out more</span></summary>
      <p>We work across the entire iamproperty product suite with key focus on our eco system layer, CRM, iamsold and movebutler.</p>
      <a href="/our-teams" class="btn btn-primary"><i class="fa-solid fa-code" aria-hidden="true"></i>Our teams<!----></a>
    </details>
    <details class="bg-secondary gradient-primary gradient-direction-left invert-colours" style="--bg: url(/images/bento/bento1.png);">
      <summary class="h3">Our design system <span role="presentation">Find out more</span></summary>
      <ul>
        <li>Library of re-usable components</li>
        <li>Maintained and tested using visual regression</li>
        <li>Well documented to make it easy to use</li>
        <li>Tech agnostic and usable with frameworks like react and vue.</li>
      </ul>
      <a href="/our-teams" class="btn btn-primary"><i class="fa-solid fa-code" aria-hidden="true"></i>Lorum ipsum<!----></a>
    </details>
  </iam-bento-grid>
</template>

<style lang="scss" scoped>
iam-bento-grid details[style]:before {

  box-shadow: none!important;
}
</style>