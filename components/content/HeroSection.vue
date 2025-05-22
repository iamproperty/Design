<script lang="ts" setup>
const props = defineProps(['hasImage', 'hasOverlap'])
</script>

<template>
  <section class="hero-section col-span-full py-6" :class="{ 'has-overlap': props.hasOverlap }">
    <div class="container" :class="{ 'has-image gap-x-4': props.hasImage }">
      <div>
        <slot name="text" />
      </div>
      <div class="image">
        <slot name="image" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
    .hero-section {
        padding-block: 3.75rem;

        //Used to add a full width 24px rounded accent to overlap the bottom of the hero
        &.has-overlap {
            position: relative;

            &:after {
                content: '';
                width: 100%;
                height: 1.5rem;
                border-top-left-radius: 1.5rem;
                border-top-right-radius: 1.5rem;
                background: #ffffff;
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }

        &.gradient-primary {
            h2,
            h3,
            p {
                color: #fff;
            }
        }

        .container {
            .image {
                display: none;
            }
        }
    
    }

    


    @media screen and (min-width: 62rem) {
        .hero-section.container {
            grid-template-columns: 1fr 40rem 1fr;
        }

        .has-image {
            grid-template-columns: 2fr 1fr;

            &:before {
                grid-column: 1 / -1;
            }

            .image {
                display: block;
            }
        }
    }
</style>
