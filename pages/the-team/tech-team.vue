<script setup lang="ts">
import HeroSection from '@/components/content/HeroSection.vue'
import TextMediaSection from '@/components/content/TextMediaSection.vue'
import KeyPoints from '@/components/content/KeyPoints.vue'
import collaborationImg from '@/assets/images/illustrations/collaboration-graphic.png'

import CardContainer from '@/components/content/CardContainer.vue'
import IamCard from '@/components/content/IamCard.vue'
import card1Img from '@/assets/images/illustrations/design-graphic.jpg'
import card2Img from '@/assets/images/illustrations/development-graphic.jpg'

const keyTeamPoints = ref([
    {
        icon: 'fa-brain', 
        heading: 'We are product engineers',
        summary: 'understanding problems holistically; building systems and applications for the future'
    },
    {
        icon: 'fa-person', 
        heading: 'We follow industry standards',
        summary: 'to make sure our code is maintainable and high quality'
    },
    {
        icon: 'fa-badge-dollar fa-sharp', 
        heading: 'We push boundaries',
        summary: 'Not happy with sticking to the current technology but adopting new modern approaches'
    },
    {
        icon: 'fa-user-gear', 
        heading: 'We build for all',
        summary: 'By making sure our applications are as accessible and usable as possible'
    },
    {
        icon: 'fa-handshake', 
        heading: 'We are rooted in principles',
        summary: 'aligning to core principles as a team to deliver the best outcomes. Check out our Front-end Technology principles. '
    },
    {
        icon: 'fa-headset', 
        heading: 'We are influencers',
        summary: 'Not just writing code but using our knowledge to help drive projects to completion.'
    }
]);

</script>

<template>
    <main>
        <h1 class="sr-only">
            Frontend Tech
        </h1>

        <HeroSection class="bg-info gradient-primary gradient-direction-left">
            <template #text>
              <h2 class="h1 text-center">
                Frontend Tech
              </h2>
              <p class="pb-0 text-center mx-auto">
                We are responsible for designing, building, and maintaining the user-facing aspects of web and mobile applications. We focus on everything that users see and interact with, ensuring that it's visually appealing, accessible, and functionally sound.
              </p>
            </template>

          </HeroSection>

          <section class="py-6">
            <CardContainer>
              <template #cards>
                <TeamMemberCard name="James Lambert" position="Technical Lead" team="Core Tech team"></TeamMemberCard>
                <TeamMemberCard name="Arthur Rigley" position="Software Engineer" team="CRM team"></TeamMemberCard>
                <TeamMemberCard name="Nathalie Walker" position="Senior Software Engineer" team="iamsold team"></TeamMemberCard>
                <TeamMemberCard name="Michael White" position="Software Engineer" team="Movebutler team"></TeamMemberCard>
                <TeamMemberCard name="Michael Wheatley" position="Software Support Engineer" team="Movebutler team"></TeamMemberCard>
                <TeamMemberCard name="Andy Woodward" position="Software Engineer" team="Marketing Toolkit team"></TeamMemberCard>
              </template>

            </CardContainer>
          </section>

          <TextMediaSection>
            <template #text>
                <KeyPoints :points="keyTeamPoints"></KeyPoints>
            </template>
            <template #media>
                <img :src="collaborationImg" alt="Laptop on desk showing website" class="w-full">
              </template>

          </TextMediaSection>

          <section class="py-6">
            <h3 class="w-100 text-center pb-0 mx-auto">Meet the rest of the team</h3>

            <CardContainer card-type="nav">
              <template #cards>

                <NuxtLink to="/the-team/product-design-team">
                  <IamCard :data-image="card1Img">
                    <div>
                      <p class="lead pb-2">
                        Shaping proptech through design
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
        </section>
      
    </main>

</template>
