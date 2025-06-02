<script setup lang="ts">
import CardContainer from '@/components/content/CardContainer.vue'
import IamCard from '@/components/content/IamCard.vue'
import card1Img from '@/assets/images/illustrations/product-team-card.png'
import card2Img from '@/assets/images/illustrations/design-graphic.jpg'
</script>

<template>
  <div class="bg-info gradient-primary gradient-direction-left col-span-full">
    <div class="text-center invert-colours">
      <slot></slot>
    </div>
    <CardContainer card-type="nav">
      <NuxtLink to="/the-team">
        <IamCard :data-image="card1Img">
          <div>
            <p class="lead pb-2">
              Shaping our design system
            </p>
            <p class="pb-2">
              Establishing a system to power our product UI development
            </p>
            <small>Tom Hinde | 18 Oct 24 - 2 min used</small>
          </div>
        </IamCard>
      </NuxtLink>
      <NuxtLink to="/the-team">
        <IamCard :data-image="card1Img">
          <div>
            <p class="lead pb-2">
              Shaping proptech through design
            </p>
            <p class="pb-0">
              Here would be the top level description
            </p>
          </div>
        </IamCard>
      </NuxtLink>
      <NuxtLink to="/the-team">
        <IamCard :data-image="card1Img">
          <div>
            <p class="lead pb-2">
              Shaping proptech through design
            </p>
            <p class="pb-0">
              Here would be the top level description
            </p>
          </div>
        </IamCard>
      </NuxtLink>
    </CardContainer>
    <div class="m-auto invert-colours">
      <NuxtLink to="/articles" class="btn btn-secondary mb-4">Read our articles</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-info {
  margin-bottom: 0;
}
h2 {
  margin: 3rem 0 0 0!important;
}
</style>
