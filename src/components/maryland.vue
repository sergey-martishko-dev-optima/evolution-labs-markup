<script setup lang="ts">

</script>

<template>
  <section class="maryland-section">
    <div class="container">
      <h2 class="heading-h2">Maryland is the <br/> #3 life sciences cluster <br/> and growing. </h2>
      <p class="description">There’s a reason so many prominent life sciences companies are choosing DNA Alley.</p>
      <div class="text-list row-line">
        <div class="column-w33">
          <h4 class="heading-h4">TOP NIH FUNDING RECIPIENT</h4>
          <p class="text-list__content"><strong>$2.7B</strong> in 2023</p>
        </div>
        <div class="column-w33">
          <h4 class="heading-h4">TOP LOCATION FOR VENTURE CAPITAL
            AND NIH FUNDING</h4>
          <p class="text-list__content">Large % of overall VC and NIH funding relative to market size
            <strong>$1.4B</strong> for 2024</p>
        </div>
        <div class="column-w33">
          <h4 class="heading-h4">LEADER IN NEW PATENTS </h4>
          <p class="text-list__content">Nearly <strong>53,000</strong> patents YTD 2024, double the next closest region*</p>
        </div>
        <div class="column-w33">
          <h4 class="heading-h4">LARGE NUMBER OF DRUGS GOING INTO FDA CLINICAL TRIALS</h4>
          <p class="text-list__content"><strong>3,292</strong> for 2023</p>
        </div>
        <div class="column-w33">
          <h4 class="heading-h4">RECORD HIGH JOB OPPORTUNITIES</h4>
          <p class="text-list__content"><strong>32.5%</strong> of Montgomery County Residents have Graduate, Professional or PHDs</p>
          <p class="text-list__content"><strong>12,541</strong> graduates from Maryland Universities with STEM degrees in 2023</p>
        </div>
      </div>
      <p class="text-small">* A tally of the number of patents containing the word ”biotechnology” and towns and cities within a given region or state.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .maryland-section {
    background: #030303;
    padding: 0 38px 150px;
    margin: -237px 0 0;
    position: relative;
    @media (max-width: 1240px) {
      margin: 0;
    }
    @media (max-width: 767px) {
      padding-bottom: 70px;
    }
    &:before {
      content: "";
      background: url("/images/maryland/maryland-title.svg") no-repeat;
      background-size: cover;
      width: 1344px;
      height: 695px;
      position: absolute;
      top: -112px;
      left: -5%;
      z-index: 4;
      @media (max-width: 1600px) {
        width: 960px;
        height: 495px;
        left: -17%;
        top: -254px;
      }
      @media (max-width: 1240px) {
        width: 873px;
        height: 448px;
        left: -17%;
        top: -249px;
      }
      @media (max-width: 767px) {
        width: 426px;
        height: 220px;
        top: -109px
      }
    }

    &:after {
      content: "";
      background: url("/images/maryland/maryland.jpg") no-repeat 50% 0 #000;
      background-size: cover;
      width: 2400px;
      height: 1300px;
      position: absolute;
      top: -300px;
      right: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, 0);
      @media (max-width: 1540px) {
        width: 850px;
        height: 393px;
        left: -17%;
        top: -249px;
      }
      @media (max-width: 767px) {
        width: 584px;
        height: 500px;
        left: 69%;
        top: -200px;
      }
    }

    .container {
      position: relative;
      z-index: 5;
      @media (max-width: 1540px) {
        padding-top: 40px;
      }
      @media (max-width: 1240px) {
        padding-top: 0;
      }
    }

    .heading-h2 {
      letter-spacing: 0;
      color: #FFFFFF;
      position: relative;
      margin-bottom: 30px;
      z-index: 5;
      @media (max-width: 1540px) {
        font-size: 95px;
        line-height: 95px;
      }
      @media (max-width: 1240px) {
        font-size: 65px;
        line-height: 65px;
      }
      @media (max-width: 767px) {
        font-size: 44px;
        line-height: 46px;
      }
    }

    .heading-h4 {
      color: #B8E0CF;
      margin-bottom: 20px;
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    .column-w33 {
      padding-bottom: 50px;
    }

    .description {
      width: 33.33%;
      margin-bottom: 50px;
      font: normal normal normal 32px/42px 'Graphik', sans-serif;
      letter-spacing: 0px;
      color: #FFFFFF;
      @media (max-width: 1600px) {
        font-size: 22px;
        line-height: 28px;
      }
      @media (max-width: 1240px) {
        font-size: 18px;
        line-height: 28px;
      }
      @media (max-width: 767px) {
        width: 80%;
      }
    }

    .text-list {
      &__content {
        font: normal normal normal 32px/42px 'Graphik', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        @media (max-width: 1600px) {
          font-size: 18px;
          line-height: 28px;
        }
      }
    }

    .text-small {
      max-width: 1024px;
      @media (max-width: 1540px) {
        max-width: 664px;
      }
      @media (max-width: 767px) {
        font-size: 10px;
        max-width: 250px;
      }
    }
  }
</style>
