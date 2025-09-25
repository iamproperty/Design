<script lang="ts" setup>
import card1Img from '@/assets/images/illustrations/product-team-card.png'
import card2Img from '@/assets/images/illustrations/design-graphic.jpg'
import card3Img from '@/assets/images/illustrations/development-graphic.jpg'


</script>
<template>
  <main>
    <h1 class="text-center">Design for our Customers</h1>
    <div class="lorem-text text-primary pb-4"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al.</strong></div>

    <div class="make-it  visualtest colour-block bg-info gradient-primary gradient-direction-angle">
        <div class="intuitive-card col bg-white p-4 shadow">
          <span class="pb-3 d-block text-uppercase">Intuitive</span>
          <a href="/client-onbaording">
            <Card class="card colour-block bg-info gradient-primary gradient-direction-angle text-white">Make it intuitive</Card>
          </a>
        </div>

        <div class="empowering-card col bg-white p-4 shadow">
          <span class="pb-3 d-block text-uppercase">Empowering</span>
          <a href="/client-onbaording">
            <Card class="card colour-block bg-info gradient-primary gradient-direction-angle text-white">Make it empowering</Card>
          </a>
        </div>

        <div class="delightful-card col bg-white p-4 shadow">
          <span class="pb-3 d-block text-uppercase">Delightful</span>
          <a href="/client-onbaording">
            <Card class="card colour-block bg-info gradient-primary gradient-direction-angle text-white">Make it Delightful</Card>
          </a>
        </div>
    </div>
    <div>
      <div class="intuitive">
        <div>
          <h2>Intuitive</h2>
          <p>Our products are made easy to use by intuitive interconnectivity, simplifying complexity, and streamlining efficiency, so our customers can do more quicker and be effective during their day.</p>

          <h4>iamproperty values</h4>
          <div class="iap-values">
            <div class="values">Effective</div>
            <div class="values">Collaborative</div>
            <div class="values">Customer focused</div>
          </div>
        </div>
        <div class="grey-square"></div>
      </div>

      <div class="enpowering">
        <div class="grey-square-enpowering"></div>
        <div class="enpowering-text">
          <h2>Enpowering</h2>
          <p>Our products empower through incentivising, loyalty and actionable insight which allows customers to take control in shaping their path within the products.</p>

          <h4>iamproperty values</h4>
          <div class="iap-values">
            <div class="values">Effective</div>
            <div class="values">Collaborative</div>
            <div class="values">Customer focused</div>
          </div>
        </div>
      </div>

      <div class="delightful">
        <div>
          <h2>Delightful</h2>
          <p>Our products are built with meaningful interactions and beautiful design which combine to deliver an enrich experience for our customers across the ecosystem.</p>

          <h4>iamproperty values</h4>
          <div class="iap-values">
            <div class="values">Effective</div>
            <div class="values">Collaborative</div>
            <div class="values">Customer focused</div>
          </div>
        </div>
        
        <div class="grey-square"></div>
      </div>
    </div>
    <div class="principles">
      <h3>Specific team principles</h3>
    </div>
    <div class="container visualtest">
        <div class="col">
          <span class="pb-3 d-block text-uppercase">Default State</span>
          <a href="/client-onbaording">
            <IamCard :data-image="card2Img"
              >Product Design<span>Here would be the top level description</span></IamCard
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Hover/focus State</span>
          <a href="/client-onbaording">
            <IamCard :data-image="card1Img"
              >Financial preparation <span>Here would be the top level description of the task</span></IamCard
            >
          </a>
        </div>

        <div class="col">
          <span class="pb-3 d-block text-uppercase">Active State</span>
          <a href="/client-onbaording">
            <IamCard :data-image="card3Img"
              >Financial preparation <span>Here would be the top level description of the task</span></IamCard
            >
          </a>
        </div>
      
    </div>
  </main>
</template>

<style>
/* top */
.lorem-text{
  text-align: center;
}

/* middle */
.card {
  border-radius: 4px;
}

.make-it{
  display: flex;
  flex-direction: row;
  grid-column: 1 / -1;
  padding: 50px;
  gap: 1rem;
}

.intuitive-card, .empowering-card, .delightful-card{
  border-radius: 4px;
}

.intuitive, .delightful, .enpowering {
  display: flex;
  flex-direction: row;
  padding: 50px 0px 50px 0px;

}

.intuitive > div {
  flex: 1;
}

.delightful > div {
  flex: 1;
}

.enpowering > div {
  flex: 1;
}

.iap-values {
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  height: 302px;
  border-radius: 12px;
  margin-left: 20px;
}

@media (max-width: 768px) {
  .grey-square {
    width: 100%;
    min-height: 302px;
    margin-left: 0;
    margin-top: 1rem; 
  }
}

.grey-square-enpowering {
  background-color: #9D9D9D;
  width: 32rem;
  max-width: 100%;
  height: 302px;
  border-radius: 12px;
  margin-right: 20px;
}

@media (max-width: 768px) {
 .grey-square-enpowering {
    width: 100%;
    min-height: 302px; /* keeps visibility */
    margin-left: 0;
    margin-top: 1rem;
    order: 2;   /* prevents overflow */
  }
  .enpowering-text {
    order: 1;
  }
}

/* bottom */
.container {
  display: flex;
  flex-direction: row;
  gap: 25px;
}

.col {
  flex: 1
}

.principles {
  display: flex;
  justify-content: center;
}

/* media queries */

@media (max-width: 768px) {
  .container, .make-it, .intuitive, .delightful, .enpowering {
  display: flex;
  flex-direction: column;
  }

  .container > div, .make-it > div, .intuitive > div, .delightful > div, .enpowering > div {
    width: 100%;
  }
}
</style>
