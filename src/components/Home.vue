<script setup lang="ts">
import {ref, onMounted, onUnmounted, nextTick} from 'vue'
import useParallax from "../composables/useParallax.ts"
import useAnimate from "../composables/useAnimate.ts";


const container = ref<HTMLDivElement | HTMLElement | null>(null)
const element = ref<HTMLImageElement | null>(null)
const poster = ref<HTMLDivElement | HTMLElement | null>(null)
const posterText = ref<HTMLDivElement | HTMLElement | null>(null)

const {isParallaxActive, containerHeight, translateY, handleScroll} = useParallax({container, element, containerHeightCoeff: 1.25})

const {createObserver: createObserverForPoster, animationClass: animationClassForPoster} = useAnimate({element: poster, classNames: ['animate__bounceInLeft']})
const {createObserver: createObserverForPosterText, animationClass: animationClassForPosterText} = useAnimate({element: posterText, classNames: ['animate__bounceInRight']})

onMounted(() => {
    handleScroll()
    createObserverForPoster()
    createObserverForPosterText()
    window.addEventListener('scroll', handleScroll)
    nextTick(() => {
        window.dispatchEvent(new Event('scroll'));
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <section class="home-section">
        <div class="container-fluid">
            <h2 ref="container" class="heading-h2 relative" :style="{ height: containerHeight ? `${containerHeight}px` : 'auto'}">
                <div ref="element" :style="{ transform: `translateY(${translateY}px)`, padding: '5% 0'}" :class="{ isParallaxActive }">
                    A whole new<br/> way of
                    life for<br/> life sciences <br/>
                    in Maryland.
                </div>
            </h2>
            <div class="row-line">
                <div ref="poster" class="column-w50 part-left" :class="[animationClassForPoster]">
                    <img class="poster-left-ab" src="/images/home-oval-bg.png" alt="">
                    <div class="gray-color"></div>
                </div>
                <div ref="posterText" class="column-w50 part-right" :class="[animationClassForPosterText]">
                    <p class="description">Coming to the lively mixed-use neighborhood of Pike & Rose, EvolutionLabs
                        North Bethesda will be the premier, walkable, urban life science opportunity in Maryland,
                        developed by Stonebridge.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-section {
    background: #FF5B35;
    padding: 100px 38px;
    @media (max-width: 767px) {
        padding-bottom: 30px;
    }

    .heading-h2 {
        position: relative;
        margin-top: -400px;
        margin-bottom: 0;
        z-index: 3;
        @media (max-width: 1540px) {
            font-size: 150px;
            line-height: 140px;
        }
        @media (max-width: 1240px) {
            font-size: 100px;
            line-height: 100px;
            margin-top: -266px;
        }
        @media (max-width: 767px) {
            font-size: 48px;
            line-height: 48px;
            margin-bottom: 80px;
            margin-top: -180px;
        }

        &:before {
            content: "";
            background: url(/images/home-title-bg.svg) no-repeat;
            background-size: cover;
            width: 1582px;
            height: 548px;
            position: absolute;
            top: 0;
            left: -33%;
            z-index: -1;
            @media (max-width: 1540px) {
                width: 1327px;
                height: 460px;
            }

            @media (max-width: 1240px) {
                width: 720px;
                height: 230px;
            }
            @media (max-width: 767px) {
                width: 426px;
                height: 148px;
                left: -50%;
            }
        }
    }

    .container-fluid {
        padding: 0 100px;
        @media (max-width: 1240px) {
            padding: 0 40px;
        }
        @media (max-width: 767px) {
            padding: 0;
        }
    }

    .column-w50 {
        position: relative;
    }

    .part-left {
        @media (max-width: 767px) {
            width: 30%;
        }
    }

    .part-right {
        @media (max-width: 767px) {
            width: 70%;
            position: relative;
            z-index: 4;
        }
    }

    .gray-color {
        background: #DAE0DE;
        width: 200px;
        height: 200px;
        position: absolute;
        left: -150px;
        bottom: -150px;
        z-index: 1;
        @media (max-width: 1540px) {
            width: 226px;
            height: 253px;
            bottom: -109px;
        }

        @media (max-width: 1240px) {
            width: 150px;
            height: 150px;
            bottom: -102px;
            left: -100px;
        }
        @media (max-width: 767px) {
            bottom: -64px;
        }
    }

    .poster-left-ab {
        width: 1479px;
        height: 831px;
        position: absolute;
        top: 0;
        left: 0;
        max-width: fit-content;
        transform: translate(-50%, -63px);
        z-index: 2;
        @media (max-width: 1540px) {
            width: 1247px;
            height: 701px;
        }
        @media (max-width: 1240px) {
            width: 1000px;
            height: 516px;
        }
        @media (max-width: 767px) {
            width: 842px;
            height: 234px;
            top: 40px;
        }
    }

    .description {
        font-size: 45px;
        line-height: 53px;
        color: #FFFFFF;
        padding-top: 100px;
        @media (max-width: 1540px) {
            font-size: 32px;
            line-height: 42px;
            padding-left: 100px;
        }
        @media (max-width: 1240px) {
            font-size: 28px;
            line-height: 40px;
            padding-left: 50px;
            padding-top: 0;
        }
        @media (max-width: 767px) {
            padding: 0;
            font-size: 16px;
            line-height: 22px;
        }
    }
}
</style>
