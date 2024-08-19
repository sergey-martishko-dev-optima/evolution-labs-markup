<script setup lang="ts">

</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="about-top">
        <h2 class="heading-h2">Energy will flow <br/>
          in and out of this <br/>
          life sciences campus. </h2>
      </div>
    </div>
    <div class="about-block row-line">
      <div class="about-photo first-block"><img src="/images/about/post-img-2.svg" alt=""></div>
      <div class="about-photo second-block"><img src="/images/about/post-img.svg" alt=""></div>
      <div class="desktop about-block-text">
        <p>Just as EvolutionLabs North Bethesda will inspire the neighborhood with its presence, the vibrancy of its surroundings is sure to inspire scientists working within it. </p>
      </div>
    </div>
    <div class="row-line row-line__align-end">
      <div class="about-block-text mobile">
        <p>Just as EvolutionLabs North Bethesda will inspire the neighborhood with its presence, the vibrancy of its surroundings is sure to inspire scientists working within it. </p>
      </div>
    </div>
    <div class="about-block-map">
      <div class="container">
        <h2 class="heading-h2">From discoveries <br/> to dining.</h2>
        <div class="row-line row-line__align-center">
          <div class="column-w50">
            <p class="about-text-map__description">Located just steps to the shopping, dining and entertainment of Pike & Rose, within proximity of governmental agencies like the FDA and just a short walk to the North Bethesda train station.</p>
            <ul class="about-text-map__list">
              <li><strong>NIH Campus</strong> 2 metro stops / 15 min drive</li>
              <li><strong>NIST</strong> 15 min drive</li>
              <li><strong>FDA Headquarters</strong> 20 min drive</li>
            </ul>
          </div>
          <div class="column-w50">
            <div class="map">
              <img src="/images/about/map-site.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about-section {
    background: #B8E0CF;
    padding: 150px 38px 0;
    position: relative;
    min-height: 1500px;
    margin: 613px 0 453px;
    z-index: 4;
    @media (max-width: 1240px) {
      margin: 0 0 200px;
      padding: 200px 0 157px;
    }
    @media (max-width: 767px) {
      margin-bottom: 87px;
      padding-bottom: 50px;
    }
    &:before {
      content: "";
      background: url("/images/about/about-top-line.svg") repeat-x 50% 0;
      width: 2662px;
      height: 613px;
      position: absolute;
      top: -613px;
      right: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, 0);
      @media (max-width: 1540px) {
        background-size: cover;
        width: 2150px;
        height: 494px;
        top: -494px;
      }
      @media (max-width: 1240px) {
        width: 1240px;
        height: 224px;
        top: -224px;
      }
      @media (max-width: 767px) {
        width: 768px;
        height: 227px;
      }
    }

    &:after {
      content: "";
      background: url("/images/about/about-bottom-line.svg") repeat-x 50% 0;
      background-size: cover;
      width: 2662px;
      height: 453px;
      position: absolute;
      bottom: -453px;
      right: 50%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, 0);
      @media (max-width: 1540px) {
        width: 1634px;
        height: 324px;
        bottom: -324px;
      }
      @media (max-width: 1240px) {
        width: 1250px;
        height: 224px;
        bottom: -224px;
      }
      @media (max-width: 767px) {
        height: 98px;
        bottom: -98px;
        width: 100%;
      }
    }

    .heading-h2 {
      color: #FF5B35;
      position: relative;
      z-index: 4;
      @media (max-width: 767px) {
        margin: 0 38px;
      }
    }

    .about-top {
      margin-top: -700px;
      @media (max-width: 1240px) {
        margin-top: -350px;
      }
      .heading-h2 {
        @media (max-width: 1540px) {
          font-size: 95px;
          line-height: 95px;
        }
        @media (max-width: 1240px) {
          font-size: 50px;
          line-height: 50px;
        }
      }
    }

    .container {
      position: relative;
      z-index: 4;
    }

    .about-block {
      position: relative;
      z-index: 3;
      margin: 0 -38px 180px;
      justify-content: space-between;
      @media (max-width: 1540px) {
        margin: -109px -38px 180px;
      }
      @media (max-width: 1240px) {
        margin: -15px -38px 200px;
      }
      @media (max-width: 767px) {
        flex-direction: column-reverse;
        flex-wrap: wrap;
        margin: 0;
      }

      .about-photo {
        width: 50%;
        @media (max-width: 767px) {
          width: 90%;
        }
        &.first-block {
          margin-top: 250px;
          @media (max-width: 1540px) {
            margin-top: 180px;
          }
          @media (max-width: 1240px) {
            margin-top: 80px;
          }
          @media (max-width: 767px) {
            margin-top: -60px;
          }
        }

        &.second-block {
          margin-top: -60px;
          @media (max-width: 767px) {
            margin-top: -36px;
            margin-left: 16%;
          }
        }

        img {
          width: 100%;
          @media (max-width: 1240px) {
            margin-bottom: 100px;
          }
          @media (max-width: 767px) {
            margin-bottom: 0;
          }
        }
      }
    }

    .about-block-map {
      .row-line {
        margin-top: -220px;
        @media (max-width: 767px) {
          margin: 0;
        }
      }

      .map {
        img {
          @media (max-width: 1540px) {
            width: 1051px;
            height: 1051px;
            max-width: fit-content;
            transform: translate(-26%, 0);
          }
          @media (max-width: 1240px) {
            width: 700px;
            height: 700px;
            transform: translate(-20%, 22%);
          }
          @media (max-width: 767px) {
            width: 100%;
            height: auto;
            transform: translate(0, 0);
          }
        }
      }
    }

    .about-block-text {
      max-width: 565px;
      position: absolute;
      bottom: 0;
      right: 10%;
      @media (max-width: 1240px) {
        max-width: 400px;
        right: 5%;
      }
      @media (max-width: 767px) {
        max-width: 220px;
        position: relative;
        right: 0;
        font-size: 13px;
        margin: 50px;
      }
      &:before {
        content: "";
        background: url("/images/about/about-block-bg.svg") no-repeat;
        background-size: cover;
        width: 1000px;
        height: 562px;
        position: absolute;
        left: -600px;
        top: -250px;
        z-index: -1;
        @media (max-width: 1540px) {
          width: 920px;
          height: 465px;
        }
        @media (max-width: 1240px) {
          width: 820px;
          height: 200px;
          left: -143%;
          top: -0;
        }
        @media (max-width: 767px) {
          width: 533px;
          height: 275px;
          transform: translate(-16%, -83%);
        }
      }

      p {
        font: normal normal normal 32px/42px 'Graphik', sans-serif;
        letter-spacing: 0;
        color: #0B0511;
        @media (max-width: 1600px) {
          font-size: 22px;
          line-height: 28px;
        }
        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 16px;
        }
      }
    }

    .about-text-map {
      &__description {
        padding-top: 150px;
        font: normal normal normal 32px/42px 'Graphik', sans-serif;
        letter-spacing: 0;
        color: #0B0511;
        margin-bottom: 40px;
        position: relative;
        z-index: 1;
        @media (max-width: 1600px) {
          font-size: 22px;
          line-height: 28px;
          max-width: 470px;
        }
        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 18px;
          padding-top: 40px;
        }
      }

      &__list {
        font: normal normal normal 32px/42px 'Graphik', sans-serif;
        letter-spacing: 0;
        color: #0B0511;
        margin-bottom: 40px;
        position: relative;
        z-index: 1;
        @media (max-width: 1600px) {
          font-size: 22px;
          line-height: 28px;
        }
        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 18px;
        }
      }
    }
    .column-w50 {
      &:first-child {
        @media (max-width: 767px) {
          padding: 0 38px 50px;
        }
      }
    }
  }
</style>
