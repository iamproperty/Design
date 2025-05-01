<script lang="ts" setup>
import IamCard from '@/components/content/IamCard.vue'
import card1Img from '@/assets/images/illustrations/design-graphic.jpg'
import card2Img from '@/assets/images/illustrations/development-graphic.jpg'

import collaborationImg from '@/assets/images/illustrations/collaboration-graphic.png'

import HeroSection from '@/components/content/HeroSection.vue'
import TextMediaSection from '@/components/content/TextMediaSection.vue'
import CardContainer from '@/components/content/CardContainer.vue'

</script>

<template>
  <main>
    <h1 class="sr-only">
      The Team
    </h1>

    <HeroSection>
      <template #text>
        <h2 class="h1 text-center">
          Shaping proptech through design
        </h2>
        <p class="pb-0 text-center mx-auto">
          Summary of what we do as a guild collective Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </template>
    </HeroSection>

    <CardContainer class="bg-info gradient-primary gradient-direction-left">
      <template #cards>
      <NuxtLink to="/the-team/product-design-team">
        <IamCard :data-image="card1Img">
          <div>
            <p class="lead pb-2">
              Product Design
            </p>
            <p class="pb-2">
              Here would be the top level description
            </p>
          </div>
        </IamCard>
      </NuxtLink>
      <NuxtLink to="/the-team/tech-team">
        <IamCard :data-image="card2Img">
          <div>
            <p class="lead pb-2">
              Frontend Tech
            </p>
            <p class="pb-2">
              Here would be the top level description
            </p>
          </div>
        </IamCard>
      </NuxtLink>
      </template>
    </CardContainer>

    <TextMediaSection>
      <template #text>
        <h2 class="h3">
          Cross-functional collaboration at every step
        </h2>
        <p>
          At the heart of our product design and build lies the perfect balance between customer needs, business goals,
          and tech feasibility.
        </p>
        <p>
          From discovery to delivery, we're hands-on every step of the way—embedding ourselves within teams and networks across iamproperty to truly understand problems and opportunities.
        </p>
        <p>
          We craft innovative solutions that not only delight customers but also drive business success and align
          seamlessly with our technology.
        </p>
      </template>
      <template #media>
        <img :src="collaborationImg" alt="Laptop on desk showing website" class="w-full">
      </template>
    </TextMediaSection>

    <TextMediaSection :media-first="true">
      <template #text>
        <h2 class="h3">
          Our team success comes from
        </h2>
        <h3 class="h4">
          Aligned goals
        </h3>
        <p>
          At the heart of our product design and build lies the perfect balance between customer needs, business goals,
          and tech feasibility.
        </p>
        <h3 class="h4">
          Communication
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
        <h3 class="h4">
          Feedback
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
      </template>
      <template #media>
        <img :src="card2Img" alt="Action shot of the team" class="w-full">
      </template>
    </TextMediaSection>
  </main>
</template>