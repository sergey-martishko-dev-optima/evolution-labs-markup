<script setup lang="ts">

</script>

<template>
  <section class="information-block">
    <div class="container">
      <h2 class="heading-h2">A campus with <br/>
        a community feel. </h2>
      <div class="information-block-about-campus row-line">
        <div class="column-w40">
          <p class="description">A 710,000 SF campus made up of a trio of purpose-built, trophy-class buildings with serene outdoor space that brings together innovation and lifestyle for an unmatched experience.</p>
          <div class="left-poster mobile">
            <img src="/images/information/info-map-1.png" alt="">
          </div>
          <div class="information-list">
            <div class="row-line">
              <div class="column-number">
                <span class="information-list__number">4</span>
              </div>
              <div class="column-auto">
                <p class="description">acres with a central park for gathering</p>
              </div>
            </div>
            <div class="row-line">
              <div class="column-number">
                <span class="information-list__number">3</span>
              </div>
              <div class="column-auto">
                <p class="description">laboratory buildings</p>
              </div>
            </div>
            <div class="row-line">
              <div class="column-number">
                <span class="information-list__number">710K</span>
              </div>
              <div class="column-auto">
                <p class="description">Square foot between three buildings </p>
              </div>
            </div>
            <div class="row-line">
              <div class="column-number">
                <span class="information-list__number">50/50</span>
              </div>
              <div class="column-auto">
                <p class="description">lab / office mix</p>
              </div>
            </div>
            <div class="row-line">
              <div class="column-number">
                <span class="information-list__number">825</span>
              </div>
              <div class="column-auto">
                <p class="description">parking spaces <br/>
                  1.5 / 1,000 RSF</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column-w60 desktop">
          <img src="/images/information/info-map-1.png" alt="">
        </div>
      </div>
    </div>
    <div class="information-block__title"><span>Full of Life</span></div>
    <div class="information-block-about-campus row-line">
      <div class="column-w50 left-poster desktop">
        <img src="/images/information/info-map-2.png" alt="">
        <a href="#" class="more">MORE FLOOR PLATES</a>
      </div>
      <div class="column-w50 right-column">
        <p class="description">Designed by experts with thoughtful amenities including an on-site conference facility, and wellness center and lounge.</p>
        <div class="column-w50 left-poster mobile">
          <img src="/images/information/mobile-map-1.svg" alt="">
        </div>
        <div class="information-list">
          <div class="row-line">
            <div class="column-number">
              <span class="information-list__number">9</span>
            </div>
            <div class="column-auto">
              <p class="description">floors of collaborative lab space, per building</p>
            </div>
          </div>
          <div class="row-line">
            <div class="column-number">
              <span class="information-list__number">25K</span>
            </div>
            <div class="column-auto">
              <p class="description">square foot
                floor plate size</p>
            </div>
          </div>
          <div class="row-line">
            <div class="column-number">
              <span class="information-list__number">16</span>
            </div>
            <div class="column-auto">
              <p class="description">slab-to-slab ceiling height throughout to allow for flexible laboratory design</p>
            </div>
          </div>
          <div class="row-line">
            <div class="column-number">
              <span class="information-list__number">LEED® SILVER</span>
            </div>
            <div class="column-auto">
              <p class="description">pursuing <br/> certification</p>
            </div>
          </div>
        </div>
        <div class="row-line row-line__justify-center mobile">
          <a href="#" class="more">MORE FLOOR PLATES</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .information-block {
    background: #DAE0DE;
    padding: 350px 0 500px;
    margin-bottom: -391px;
    @media (max-width: 1540px) {
      padding: 241px 0 500px;
    }

    @media (max-width: 1240px) {
      padding: 101px 0 300px;
      margin: 0;
    }

    &__title {
      font: normal normal 300 485px/1 "Flecha M", sans-serif;
      white-space: nowrap;
      text-overflow: ellipsis;
      letter-spacing: 0;
      color: #FF5B35;
      padding: 200px 0;
      position: relative;
      margin-bottom: -200px;
      @media (max-width: 1540px) {
        font-size: 340px;
        padding-top: 0;
      }

      @media (max-width: 1240px) {
        font-size: 240px;
        padding: 0 0 50px;
        margin: 0;
      }
      @media (max-width: 767px) {
        font-size: 87px;
        padding-top: 150px;
        padding-bottom: 0;
      }

      &:after {
        content: "";
        background: url("/images/information/title-inform-bg.svg") no-repeat;
        background-size: cover;
        width: 1776px;
        height: 477px;
        position: absolute;
        bottom: 35px;
        left: -30%;
        @media (max-width: 1240px) {
          width: 1000px;
          height: 277px;
        }
        @media (max-width: 767px) {
          width: 473px;
          height: 127px;
          transform: rotate(180deg);
          left: 23%;
          top: 91px;
        }
      }

      span {
        position: relative;
        z-index: 1;
      }
    }

    .heading-h2 {
      color: #FF5B35;
      @media (max-width: 767px) {
        padding: 0 38px;
      }
    }

    .description {
      @media (max-width: 767px) {
        font-size: 13px;
        line-height: 16px;
      }
    }

    &-about-campus {
      margin-top: 100px;
      margin-bottom: 70px;
      @media (max-width: 1240px) {
        margin-top: 50px;
      }
      @media (max-width: 767px) {
        margin-bottom: -50px;
        margin-top: 20px;
      }

      img {
        max-width: max-content;
        @media (max-width: 1540px) {
          max-width: 900px;
        }
        @media (max-width: 1540px) {
          max-width: 676px;
        }
      }

      .column-w40 {
        @media (max-width: 767px) {
          padding: 0 38px;
        }
      }

      .left-poster {
        background: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55%;
        position: relative;
        @media (max-width: 767px) {
          width: calc(100% + 72px);
          margin: 40px -36px 0;
        }
        img {
          @media (max-width: 1540px) {
            max-width: 740px;
          }
          @media (max-width: 1240px) {
            max-width: 90%;
          }
          @media (max-width: 767px) {
            max-width: 100%;
          }
        }
      }

      .right-column {
        padding: 0 100px;
        width: 45%;
        @media (max-width: 1240px) {
          padding: 0 50px;
        }
        @media (max-width: 767px) {
          width: 100%;
          padding: 0 30px;
        }
      }

      .more {
        background: #2C72E4;
        border-radius: 0 0 20px 20px;
        opacity: 1;
        padding: 5px 10px;
        position: absolute;
        bottom: -50px;
        right: 0;
        font: normal normal normal 32px/40px "Flecha M", sans-serif;
        @media (max-width: 1540px) {
          font-size: 26px;
          line-height: 30px;
        }
        @media (max-width: 1240px) {
          bottom: -40px;
        }
        @media (max-width: 767px) {
          border-radius: 10px;
          position: relative;
          bottom: 0;
          font-size: 17px;
        }
      }
    }
  }
</style>

