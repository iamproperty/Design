<script lang="ts" setup>
import card1Img from '@/assets/images/illustrations/product-team-card.png'
import card2Img from '@/assets/images/illustrations/design-graphic.jpg'
import card3Img from '@/assets/images/illustrations/development-graphic.jpg'
import IamCard from '@/components/content/IamCard.vue'
import HeroSection from '@/components/content/HeroSection.vue'
import TextMediaSection from '@/components/content/TextMediaSection.vue'
import CardContainer from '~/components/content/CardContainer.vue'

</script>

<template>
  <main>
    <HeroSection>
      <template #text>
        <h1>Design for our Customers</h1>
        <div class="lorem-text"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.</strong></div>
      </template>
    </HeroSection>
    <div class="make-it visualtest colour-block bg-info gradient-primary gradient-direction-angle">
          <div>
            <img class="principle-card" src="assets/images/illustrations/Intuitive.png" alt="Make it intuitive">
          </div>

          <div>
            <img class="principle-card" src="assets/images/illustrations/Empowering.png" alt="Make it empowering">
          </div>
        
          <div>
            <img class="principle-card" src="assets/images/illustrations/Delightful.png" alt="Make it delightful">
          </div>
    </div>

      <TextMediaSection>
        <template #text>
            <h2>Intuitive</h2>
            <p>Our products are made easy to use by intuitive interconnectivity, simplifying complexity, and streamlining efficiency, so our customers can do more quicker and be effective during their day.</p>

            <h4>iamproperty values</h4>
            <ul class="iap-values">
              <li class="values">Effective</li>
              <li class="values">Collaborative</li>
              <li class="values">Customer focused</li>
            </ul>
        </template>
        <template #media>
            <div class="grey-square"></div>
        </template>
      </TextMediaSection>
    

      <TextMediaSection :media-first="true">
        <template #text>
          <div class="empowering-text">
            <h2>Empowering</h2>
            <p>Our products empower through incentivising, loyalty and actionable insight which allows customers to take control in shaping their path within the products.</p>

            <h4>iamproperty values</h4>
            <ul class="iap-values">
              <li class="values">Effective</li>
              <li class="values">Collaborative</li>
              <li class="values">Customer focused</li>
            </ul>
          </div>
        </template>
        <template #media>
            <div class="grey-square-empowering"></div>
        </template>
      </TextMediaSection>

      <TextMediaSection>
        <template #text>
          <h2>Delightful</h2>
          <p>Our products are built with meaningful interactions and beautiful design which combine to deliver an enrich experience for our customers across the ecosystem.</p>

          <h4>iamproperty values</h4>
          <ul class="iap-values">
            <li class="values">Effective</li>
            <li class="values">Collaborative</li>
            <li class="values">Customer focused</li>
          </ul>
        </template>
        
        <template #media>
            <div class="grey-square"></div>
        </template>
      </TextMediaSection>
    
    <div class="principles">
      <h3>Specific team principles</h3>
    </div>
    <CardContainer>
        <div class="col">
          <NuxtLink>
            <IamCard :data-image="card2Img">
              Product Design<span>Here would be the top level description</span>
            </IamCard>
          </NuxtLink>
        </div>

        <div class="col">
          <NuxtLink>
            <IamCard :data-image="card1Img">
              Content Design<span>Here would be the top level description</span>
            </IamCard>
          </NuxtLink>
        </div>

        <div class="col">
          <NuxtLink>
            <IamCard :data-image="card3Img">
              Frontend Tech<span>Responsible for building, and maintaining the user-facing aspects of web applications</span>
            </IamCard>
          </NuxtLink>
        </div>
    </CardContainer>
  </main>
</template>

<style>
/* top */
h1, .lorem-text {
  text-align: center;
}

.lorem-text {
  width: 70%;
  margin: 0 auto;
}
/* middle */

.make-it{
  display: flex;
  justify-content: center;
  flex-direction: row;
  grid-column: 1 / -1;
  padding: 50px;
  gap: 1rem;
}

.principle-card {
  border-radius: 4px;
}

.iap-values {
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.values {
  border: 1px solid #9D9D9D;
  color: #00313C;
  border-radius: 4px;
  padding: 5px;
}

.grey-square {
  background-color: #9D9D9D;
  width: 32rem;
  max-width: 100%;
  border-radius: 12px;
  flex-shrink: 0;
  height: 20rem;
}

.grey-square-empowering {
  background-color: #9D9D9D;
  width: 32rem;
  max-width: 100%;
  border-radius: 12px;
  flex-shrink: 0;
  height: 20rem;
}

/* bottom */
.col {
  display: flex;
  justify-content: center;
  flex: 1
}

.principles {
  display: flex;
  justify-content: center;
}

/* media queries */

@media (max-width: 768px) {
  .make-it {
  display: flex;
  flex-direction: column;
  }

  .make-it > div {
    width: 100%;
  }

  .grey-square-empowering {
    width: 100%;
    min-height: 302px;
    margin-left: 0;
    margin-top: 1rem;
    order: 2;
  }
  .empowering-text {
    order: 1;
  }

   .grey-square {
    width: 100%;
    min-height: 302px;
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
