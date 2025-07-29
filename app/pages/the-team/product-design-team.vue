<script setup lang="ts">
import HeroSection from '@/components/content/HeroSection.vue'
import TextMediaSection from '@/components/content/TextMediaSection.vue'
import KeyPoints from '@/components/content/KeyPoints.vue'
import teamImg from '@/assets/images/illustrations/temp-team-photo.png'

import CardContainer from '@/components/content/CardContainer.vue'
import IamCard from '@/components/content/IamCard.vue'
import card1Img from '@/assets/images/illustrations/product-team-card.png'
import card2Img from '@/assets/images/illustrations/design-graphic.jpg'


const keyTeamPoints = ref([
    {
        icon: 'fa-brain', 
        heading: 'We are product thinkers',
        summary: 'understanding user needs. business goals and market context to design with product strategy'
    },
    {
        icon: 'fa-person', 
        heading: 'We are user focused',
        summary: 'through data-drvien design decisions, user research, interviews and usability testing.'
    },
    {
        icon: 'fa-badge-dollar fa-sharp', 
        heading: 'We are problem solvers',
        summary: "focus on solving user problems through intuitive design, keeping the user's journey smooth and meaningful."
    },
    {
        icon: 'fa-user-gear', 
        heading: 'We are cross-disciplinary',
        summary: 'with expertise in UI and UX we create designs that are visually appealing and functionally brilliant.'
    },
    {
        icon: 'fa-handshake', 
        heading: 'We are rooted in principles',
        summary: 'aligning to core principles as a team to deliver the best outcomes. Check out our Product Design principles. '
    },
    {
        icon: 'fa-headset', 
        heading: 'We are researchers',
        summary: 'gathering insight to inform discovery, usability testing and live product analysis to deliver improved solutions.'
    }
]);

</script>

<template>
    <main>
        <h1 class="sr-only">
            Product Design
        </h1>

        <HeroSection class="bg-info gradient-primary gradient-direction-left mb-8">
            <template #text>
              <h2 class="h1 text-center">
                Product Design
              </h2>
              <p class="pb-0 text-center mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.
              </p>
            </template>

          </HeroSection>

          <section class="py-6">
            <CardContainer>
              <template #cards>
                <TeamMemberCard name="Tom Hinde" position="Lead Product Designer" team="Transformation team"></TeamMemberCard>
                <TeamMemberCard name="Mark Clipperton" position="Product Designer" team="CRM team"></TeamMemberCard>
                <TeamMemberCard name="Victoria McAlinden" position="Product Designer" team="iamsold team"></TeamMemberCard>
                <TeamMemberCard name="Kevin Gibson" position="Product Designer" team="movebutler team"></TeamMemberCard>
              </template>

            </CardContainer>
          </section>

          <TextMediaSection>
            <template #text>
                <KeyPoints :points="keyTeamPoints"></KeyPoints>
            </template>
            <template #media>
                <img :src="teamImg" alt="Team gathered around whiteboard with post-it notes" class="w-full">
              </template>

          </TextMediaSection>

          <section class="py-6">
            <h3 class="w-100 text-center pb-0 mx-auto">Meet the rest of the team</h3>

            <CardContainer card-type="nav">
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
                  <NuxtLink to="/the-team/tech-team">
                  <IamCard :data-image="card2Img">
                    <div>
                      <p class="lead pb-2">
                        Frontend Tech
                      </p>
                      <p class="pb-0">
                        Here would be the top level description
                      </p>
                    </div>
                  </IamCard>
                </NuxtLink>
            </CardContainer>
        </section>
      
    </main>

</template>
