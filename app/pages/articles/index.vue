<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const route = useRoute();
const groupCount = 3;

const { data: count } = await useAsyncData(route.path, () => {
  return queryCollection('articles').count()
})

const { data: featured } = await useFetch(`/api/articles?featured=true`);


const limit = ref(groupCount);
const showButton = ref(true);

if (limit.value === count.value)
  showButton.value = false;

let { data } = await useFetch(`/api/articles?limit=${limit.value}`);
const loadedData = ref(data);

const setMasonaryHeight = function (feed: HTMLElement): void {
  const browserFontSize = Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  const minHeight = getComputedStyle(feed).getPropertyValue('min-height');
  let colHeight1 = 0;
  let colHeight2 = 0;
  let MDcolHeight1 = 0;
  let MDcolHeight2 = 0;
  let MDcolHeight3 = 0;

  if (minHeight === '2px'){
    setTimeout (function () { 
      feed.querySelectorAll("a:nth-child(odd)").forEach((arrayElement, index) => {
        colHeight1 += (arrayElement.offsetHeight / browserFontSize) + 1;
      });

      feed.querySelectorAll("a:nth-child(even)").forEach((arrayElement, index) => {
        colHeight2 += (arrayElement.offsetHeight / browserFontSize) + 1;
      });

      feed.style.setProperty('--col1Height',Math.ceil(colHeight1)+'rem');
      feed.style.setProperty('--col2Height',Math.ceil(colHeight2)+'rem');
      feed.style.removeProperty('height'); 
    
    }, 500);
  }

  if (minHeight == "3px"){
    
    setTimeout(function(){ 
      
      feed.querySelectorAll("a:nth-child(3n+1)").forEach((arrayElement, index) => {
        MDcolHeight1 += (arrayElement.offsetHeight / browserFontSize) + 1;
      });

      feed.querySelectorAll("a:nth-child(3n+2)").forEach((arrayElement, index) => {
        MDcolHeight2 += (arrayElement.offsetHeight / browserFontSize) + 1;
      });

      feed.querySelectorAll("a:nth-child(3n)").forEach((arrayElement, index) => {
        MDcolHeight3 += (arrayElement.offsetHeight / browserFontSize) + 1;
      });

      feed.style.setProperty('--MDcol1Height',Math.ceil(MDcolHeight1)+'rem');
      feed.style.setProperty('--MDcol2Height',Math.ceil(MDcolHeight2)+'rem');
      feed.style.setProperty('--MDcol3Height',Math.ceil(MDcolHeight3)+'rem');

      feed.style.removeProperty('height'); 
    
    }, 500);
    
  }
}

onMounted(() => {
  import('@@/node_modules/@iamproperty/components/assets/js/components/card/card.component.min.js').then((module) => {
    if (!window.customElements.get('iam-card'))
      window.customElements.define('iam-card', module.default)
  })
  import('@@/node_modules/@iamproperty/components/assets/js/components/carousel/carousel.component.min.js').then((module) => {
    if (!window.customElements.get('iam-carousel'))
      window.customElements.define('iam-carousel', module.default)
  })

  const feed = document.querySelector('.article-listing');

  let cardsInterval;
  let cardsTimeout;

  setMasonaryHeight(feed);
  cardsInterval = setInterval(function(){ setMasonaryHeight(feed) }, 500);
  clearTimeout(cardsTimeout);
  cardsTimeout = setTimeout(function(){ clearInterval(cardsInterval); }, 5000);

  window.addEventListener('resize', function(): void {
    clearTimeout(cardsTimeout);
    cardsTimeout = setTimeout(function(){ setMasonaryHeight(feed) }, 500);
  });
});

async function handleLoadMore() {
  limit.value += groupCount;

  const feed = document.querySelector('.article-listing');

  const minHeight = parseInt(getComputedStyle(feed).getPropertyValue('height'));
  feed.style.height = (minHeight * 3) + "rem";

  const data2 = await $fetch(`/api/articles?limit=${limit.value}`);

  loadedData.value = data2;

  setMasonaryHeight(feed)

  if (limit.value >= count.value)
    showButton.value = false;
}

</script>

<template>
  <main>
    <h1>Team member talks</h1>

    <h2>Spotlight</h2>

    <iam-carousel class="mb-5">
      <div v-for="article in featured" :key="article.path" :to="article.path" active-class="selected">
        <iam-card :data-image="article.meta.featuredImage">
          <h3 class="h2">{{ article.title }}</h3>
          <p>
            {{ article.description }}
          </p>
          <NuxtLink :to="article.path" class="btn btn-primarty mb-0">Read article</NuxtLink>
        </iam-card>
      </div>
    </iam-carousel>


    <h2>Latest Articles</h2>

    <div class="article-listing">

      <NuxtLink v-for="article in loadedData" :key="article.path" :to="article.path" active-class="selected">
        <iam-card :data-image="article.meta.featuredImage">
          {{ article.title }}
          <p class="line-clamp-3 text-lg">
            {{ article.description }}
          </p>
          <small v-if="article.info" class="">
            {{ article.info }}
          </small>
        </iam-card>
      </NuxtLink>
    </div>

    

    <button v-if="showButton" class="btn btn-primary load-more" @click="handleLoadMore">Load more</button>
  </main>
</template>

<style lang="scss" scoped>

@media (min-width: 62em){
  iam-carousel::part(btns){
    display: none;
  }

  iam-carousel iam-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    outline: none;
    box-shadow: none;
    padding-bottom: 1rem;
    min-height: 20rem;
  }

  iam-carousel iam-card::part(head) {
    width: 50%;
    border-radius: var(--card-border-radius);
  }

  iam-carousel iam-card::part(body) {
    width: 50%;
    display: flex
  ;
      flex-direction: column;
      padding-left: 2rem;
      padding-block: 0;
  }

  iam-carousel iam-card::part(details),
  iam-carousel iam-card::part(footer),
  iam-carousel iam-card::part(body):before,
  iam-carousel iam-card::part(body):after{
    display: none;
  }

  iam-carousel iam-card h3 {
    font-size: round(var(--body-fs, 1rem) * pow(var(--type-scale), 5), .25rem);
  }

  iam-carousel::part(controls) {
    margin-top: 1rem;
  }
}

.article-listing {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  padding: 0;
  height: 7000px;
  margin-bottom: 2rem;

  a {
    margin-bottom: 1rem;
  }

  @media (min-width: 36em) and (max-width: 62em){

    height: max(var(--col1Height),var(--col2Height));
    min-height: 2px;
    margin-left: -1rem;
    margin-right: -1rem;

    &:before, &:after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 2;
    }

    a {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      width: calc(50% - 1rem);
    }

    a:nth-child(odd) {
      order: 1;
    }
    a:nth-child(even) {
      order: 3;
    }
  }
  @media (min-width: 62em){

    height: max(var(--MDcol1Height),var(--MDcol2Height),var(--MDcol2Height));
    min-height: 3px;
    margin-left: -1rem;
    margin-right: -1rem;

    &:before, &:after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 2;
    }
   
    &:after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 4;
    }

    a {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      width: calc(50% - 1rem);
    }

    &:has(a:nth-child(3n)){
      a {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: calc(33.33333% - 1rem);
      }
    }

    a:nth-child(3n+1) {
      order: 1;
      animation-delay: 0.25s;
    }
    a:nth-child(3n+2) {
      order: 3;
      animation-delay: 0.5s;
    }
    a:nth-child(3n) {
      order: 5;
      animation-delay: 1s;
    }
  }

  a:nth-child(3) ~ a{
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
    animation-fill-mode: backwards;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
      transform: translate(0,2rem);
    }
    100% {
      opacity: 1;
      transform: translate(0,0);
    }
  }

}
button.load-more {
  margin: 0 auto 3rem auto;
}
</style>
