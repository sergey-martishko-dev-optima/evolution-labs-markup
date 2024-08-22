<script setup lang="ts">
import {ref, onMounted, nextTick, onUnmounted} from 'vue'
import useAnimate from "../composables/useAnimate.ts"
import useParallax from "../composables/useParallax.ts"

const container = ref<HTMLDivElement | HTMLElement | null>(null)
const element = ref<HTMLImageElement | null>(null)
const poster = ref<HTMLDivElement | HTMLElement | null>(null)
const posterText = ref<HTMLDivElement | HTMLElement | null>(null)

const {isParallaxActive, translateY, handleScroll} = useParallax({
    container,
    element,
    containerHeightCoeff: 1.35
})

const {createObserver: createObserverForPoster, animationClass: animationClassForPoster} = useAnimate({
    element: poster,
    classNames: ['animate__bounceInRight']
})
const {
    createObserver: createObserverForPosterText,
    animationClass: animationClassForPosterText
} = useAnimate({element: posterText, classNames: ['animate__bounceInLeft']})

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
    <section class="about-block-map">
        <div class="container">
            <div ref="container">
                <h2 ref="element" class="heading-h2" :style="{ transform: `translateY(${translateY}px)`}" :class="{ isParallaxActive }">
                    From discoveries <br/> to dining.
                </h2>
            </div>
            <div class="row-line row-line__align-center">
                <div ref="posterText" class="column-w50" :class="[animationClassForPosterText]">
                    <p class="about-text-map__description">Located just steps to the shopping, dining and
                        entertainment of Pike & Rose, within proximity of governmental agencies like the FDA and
                        just a short walk to the North Bethesda train station.</p>
                    <ul class="about-text-map__list">
                        <li><strong>NIH Campus</strong> 2 metro stops / 15 min drive</li>
                        <li><strong>NIST</strong> 15 min drive</li>
                        <li><strong>FDA Headquarters</strong> 20 min drive</li>
                    </ul>
                </div>
                <div ref="poster" class="column-w50" :class="[animationClassForPoster]">
                    <div class="map">
                        <img src="/images/about/map-site.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-block-map {
    background: #B8E0CF;
    position: relative;
    margin-bottom: 453px;
    padding: 50px 50px 0;
    z-index: 3;

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

    .row-line {
        margin-top: -220px;
        @media (max-width: 767px) {
            margin: 0;
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

    .map {
        @media (max-width: 1540px) {
            height: 851px !important;
        }
        @media (max-width: 1240px) {
            height: 700px !important;
        }
        @media (max-width: 767px) {
            height: auto !important;
        }

        img {
            //position: absolute;
            //right: 0;
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
}
</style>
