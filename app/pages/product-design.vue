<script lang="ts" setup>
import card1Img from '@/assets/images/illustrations/product-team-card.png'
import IamCard from '@/components/content/IamCard.vue'
import HeroSection from '@/components/content/HeroSection.vue'
import TextMediaSection from '@/components/content/TextMediaSection.vue'
import CardContainer from '~/components/content/CardContainer.vue'

</script>

<template>
  <main>
    <HeroSection class="make-it visualtest colour-block bg-info gradient-primary gradient-direction-angle">
      <template #text>
        <h1>Product Design Principles</h1>
        <div class="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.</div>
      </template>
    </HeroSection>

      <TextMediaSection>
        <template #text>
            <h2>User-centricity</h2>
            <p>Making design decisions based on what you know about customers and what they want from the product.</p>

            <h4>Delivered successfully by</h4>
            <p>Avoiding assumption based decision making as much as possible - utilise both quantitative user insight to inform design decisions.</p>

        </template>
        <template #media>
            <div class="grey-square"></div>
        </template>
      </TextMediaSection>
    

      <TextMediaSection :media-first="true">
        <template #text>
          <div class="empowering-text">
            <h2>Consistency</h2>
            <p>Being consistent with UI and behavioural patterns ensures an experience that's easy to use and familiar to our customers. With a brand aesthetic that is baked into all of our iamproperty products.</p>

            <h4>Delivered successfully by</h4>
            <p>Using design patterns, elements and components from the iamKey design system keeps consistency of UI throughout the product suite.</p>
          </div>
        </template>
        <template #media>
            <div class="grey-square-empowering"></div>
        </template>
      </TextMediaSection>

      <TextMediaSection>
        <template #text>
          <h2>Hierarchy</h2>
          <p>Giving our product page clear logical structure allows customers to easily navigate page content with ease.</p>

          <h4>Delivered successfully by</h4>
          <p>Using approved design patterns and typography structure from within the iamKey design system.</p>
        </template>
        
        <template #media>
            <div class="grey-square"></div>
        </template>
      </TextMediaSection>
    
      <TextMediaSection :media-first="true">
        <template #text>
          <div class="empowering-text">
            <h2>Task Content</h2>
            <p>Make tasks manageable. Our products support customers to achieve success during their busy day. We ensure tasks and interactions are efficient and meaningful to be mindful of the circumstances in which our products are used.</p>

            <h4>Delivered successfully by</h4>
            <p>Using device considerations, breaking down complex tasks into simple and digestible interactions.</p>
          </div>
        </template>
        <template #media>
            <div class="grey-square-empowering"></div>
        </template>
      </TextMediaSection>
      
      <TextMediaSection>
        <template #text>
          <h2>Manage expectation</h2>
          <p>Keeping customers informed throughout the task by providing the necessary information at the right time, helping to prevent errors and confusion while ensuring they understand what has happened and what will happen next.</p>

          <h4>Delivered successfully by</h4>
          <p>Providing clear information and prompts surfaced at the right time to ensure customers complete the tasks correctly and efficiently.</p>
        </template>
        
        <template #media>
            <div class="grey-square"></div>
        </template>
      </TextMediaSection>

      <TextMediaSection :media-first="true">
        <template #text>
          <div class="empowering-text">
            <h2>Accessible</h2>
            <p>Designing our interfaces and interactions that are perceivable, operable, understandable, and robust for a diverse range of users.</p>

            <h4>Delivered successfully by</h4>
            <p>Using approved guidance, patterns and structure from within the iamKey design system.</p>
          </div>
        </template>
        <template #media>
            <div class="grey-square-empowering"></div>
        </template>
      </TextMediaSection>
    <div class="principles">
      <h3>Specific team principles</h3>
    </div>
    <CardContainer>
        <div class="col">
          <NuxtLink>
            <IamCard :data-image="card1Img">
              Design for our customers<span>Here would be the top level description</span>
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
            <IamCard :data-image="card1Img">
              Frontend Tech<span>Here would be the top level description</span>
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
  color: white;
}

.lorem-text {
  width: 50%;
  margin: 0 auto;
}
/* middle */

.make-it {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  height: 22rem;
}

.grey-square-empowering {
  background-color: #9D9D9D;
  width: 32rem;
  max-width: 100%;
  border-radius: 12px;
  flex-shrink: 0;
  height: 22rem;
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

   .grey-square {
    width: 100%;
    min-height: 302px;
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
