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
                <p>Just as EvolutionLabs North Bethesda will inspire the neighborhood with its presence, the vibrancy of
                    its surroundings is sure to inspire scientists working within it. </p>
            </div>
        </div>
        <div class="row-line row-line__align-end">
            <div class="about-block-text mobile">
                <p>Just as EvolutionLabs North Bethesda will inspire the neighborhood with its presence, the vibrancy of
                    its surroundings is sure to inspire scientists working within it. </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-section {
    background: #B8E0CF;
    padding: 150px 38px 100px;
    position: relative;
    margin: 613px 0 0;
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

    .about-block-text {
        max-width: 565px;
        position: absolute;
        bottom: 0;
        right: 10%;
        @media (max-width: 1540px) {
          max-width: 470px;
        }
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

    .column-w50 {
        &:first-child {
            @media (max-width: 767px) {
                padding: 0 38px 50px;
            }
        }
    }
}
</style>
