<script setup lang="ts">
import {ref, onMounted, nextTick, onUnmounted} from 'vue'
import useAnimate from "../composables/useAnimate.ts"
import useParallax from "../composables/useParallax.ts"


const heading = ref<HTMLHeadElement|HTMLElement|null>(null)
const text = ref<HTMLDivElement|HTMLElement|null>(null)
const imageWrapper = ref<HTMLDivElement|HTMLElement|null>(null)
const imageWrapperMobile = ref<HTMLDivElement|HTMLElement|null>(null)
const fullOfLifeContainer = ref<HTMLDivElement|HTMLElement|null>(null)
const fullOfLifeElement = ref<HTMLDivElement|HTMLElement|null>(null)

const {createObserver: createObserverForHeading, animationClass: animationClassForHeading} = useAnimate({element: heading, classNames: ['animate__fadeInUp']})
const {createObserver: createObserverForText, animationClass: animationClassForText} = useAnimate({element: text, classNames: ['animate__fadeInUp']})
const {createObserver: createObserverForImageWrapper, animationClass: animationClassForImageWrapper} = useAnimate({element: imageWrapper, classNames: ['animate__fadeInUp']})
const {createObserver: createObserverForImageWrapperMobile, animationClass: animationClassForImageWrapperMobile} = useAnimate({element: imageWrapperMobile, classNames: ['animate__fadeInUp']})

const {handleScroll, isParallaxActive, containerHeight, translateY} = useParallax({container: fullOfLifeContainer, element: fullOfLifeElement})

const fullOfLifeImgWrapper = ref<HTMLDivElement|HTMLElement|null>(null)
const fullOfLifeTextWrapper = ref<HTMLDivElement|HTMLElement|null>(null)

const {createObserver: createObserverForFullOfLifeImgWrapper, animationClass: animationClassForFullOfLifeImgWrapper} = useAnimate({element: fullOfLifeImgWrapper, classNames: ['animate__fadeInUp']})
const {createObserver: createObserverForFullOfLifeTextWrapper, animationClass: animationClassForFullOfLifeTextWrapper} = useAnimate({element: fullOfLifeTextWrapper, classNames: ['animate__fadeInUp']})

onMounted(() => {
    handleScroll()
    createObserverForHeading()
    createObserverForText()
    createObserverForImageWrapper()
    createObserverForImageWrapperMobile()

    createObserverForFullOfLifeImgWrapper()
    createObserverForFullOfLifeTextWrapper()

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
    <section class="information-block">
        <div class="container">
            <h2 ref="heading" class="heading-h2" :class="[animationClassForHeading]">A campus with <br/>
                a community feel. </h2>
            <div class="information-block-about-campus row-line">
                <div ref="text" class="column-w40" :class="[animationClassForText]">
                    <p class="description">A 710,000 SF campus made up of a trio of purpose-built, trophy-class
                        buildings with serene outdoor space that brings together innovation and lifestyle for an
                        unmatched experience.</p>
                    <div ref="imageWrapperMobile" class="left-poster mobile" :class="[animationClassForImageWrapperMobile]">
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
                <div ref="imageWrapper" class="column-w60 desktop" :class="[animationClassForImageWrapper]">
                    <img src="/images/information/info-map-1.png" alt="">
                </div>
            </div>
        </div>
        <div class="information-block__title">
            <div ref="fullOfLifeContainer" class="relative" :style="{ height: containerHeight ? `${containerHeight}px` : 'auto'}">
                <span ref="fullOfLifeElement" :style="{ transform: `translateY(${translateY}px)`, padding: '5% 0'}" :class="{ isParallaxActive }">Full of Life</span>
            </div>
        </div>
        <div class="information-block-about-campus row-line">
            <div ref="fullOfLifeImgWrapper" class="column-w50 left-poster desktop" :class="[animationClassForFullOfLifeImgWrapper]">
                <img src="/images/information/info-map-2.png" alt="">
                <a href="#" class="more">MORE FLOOR PLATES</a>
            </div>
            <div ref="fullOfLifeTextWrapper" class="column-w50 right-column" :class="[animationClassForFullOfLifeTextWrapper]">
                <p class="description">Designed by experts with thoughtful amenities including an on-site conference
                    facility, and wellness center and lounge.</p>
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
                            <span class="information-list__number">16'</span>
                        </div>
                        <div class="column-auto">
                            <p class="description">slab-to-slab ceiling height throughout to allow for flexible
                                laboratory design</p>
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
        padding: 241px 50px 500px 100px;
    }

    @media (max-width: 1240px) {
        padding: 141px 20px 300px;
        margin: 0;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 151px 20px 300px;
    }
    @media (max-width: 767px) {
        padding: 101px 0 350px;
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
            margin-left: -100px;
        }

        @media (max-width: 1240px) {
            font-size: 240px;
            padding: 0 0 50px;
            margin: 0;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
            font-size: 180px;
            padding-top: 150px;
            padding-bottom: 0;
            margin: -97px 0 80px;
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
            @media (max-width: 1540px) {
                width: 1300px;
                height: 350px;
            }
            @media (max-width: 1240px) {
                width: 1000px;
                height: 277px;
            }
            @media (min-width: 768px) and (max-width: 1023px) {
                width: 668px;
                height: 180px;
                transform: rotate(180deg);
                left: 23%;
                top: 52px;
            }
            @media (max-width: 767px) {
                width: 473px;
                height: 127px;
                transform: rotate(180deg);
                left: 23%;
                top: 52px;
            }
        }

        span {
            position: relative;
            z-index: 1;
            display: inline-block;
        }
    }

    .heading-h2 {
        color: #FF5B35;
        @media (max-width: 767px) {
            padding: 0 20px;
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
            max-width: 110%;
            // @media (max-width: 1540px) {
            //     max-width: 900px;
            // }
            @media (max-width: 1540px) {
                max-width: 763px;
                max-height: 585px;
            }
            @media (min-width: 768px) and (max-width: 1023px) {
                max-width: 555px;
                margin: 0 0 0 -72px;
                object-fit: contain;
            }
        }

        .column-w60 {
            align-items: center;
        }

        .column-w40 {
            @media (min-width: 768px) and (max-width: 1023px) {
                position: relative;
                z-index: 4;
            }
            @media (max-width: 767px) {
                padding: 0 20px;
            }
        }

        .left-poster {
            background: rgba(255, 255, 255, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55%;
            position: relative;
            @media (min-width: 768px) and (max-width: 1023px) {
                width: 50%;
            }
            @media (max-width: 767px) {
                background: #FFFFFF;
                width: calc(100% + 72px);
                margin: 40px -36px 0;
            }

            img {
                max-width: 100%;
                margin: 0;
                @media (max-width: 1540px) {
                  max-width: 90%;
                  margin: 0;
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
            padding: 0 70px;
            width: 45%;
            @media (max-width: 1240px) {
                padding: 0 50px;
            }
            @media (min-width: 768px) and (max-width: 1023px) {
                width: 50%;
                padding: 0 20px;
            }
            @media (max-width: 767px) {
                width: 100%;
                padding: 0 20px;
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
            transition: .4s;

            @media (max-width: 1540px) {
                font-size: 26px;
                line-height: 30px;
                bottom: -40px;
            }
            //@media (max-width: 1240px) {
            //    bottom: -40px;
            //}
            @media (min-width: 768px) and (max-width: 1023px) {
                font-size: 22px;
                line-height: 22px;
                bottom: -32px;
            }
            @media (max-width: 767px) {
                border-radius: 10px;
                position: relative;
                bottom: 0;
                font-size: 17px;
            }
            &:hover {
              background: #FF5B35;
            }
        }
    }
}
</style>

