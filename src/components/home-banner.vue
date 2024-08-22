<script setup lang="ts">
import {ref, onMounted, onUnmounted, nextTick} from 'vue'
import useParallax from "../composables/useParallax.ts"


const container = ref<HTMLDivElement | HTMLElement | null>(null)
const element = ref<HTMLImageElement | null>(null)
const {isParallaxActive, containerHeight, translateY, handleScroll} = useParallax({container, element, containerHeightCoeff: 1.3})

const onImageLoad = () => {
    if (!element.value) {
        return
    }
    handleScroll()
}

onMounted(() => {
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
    <section class="home-banner">
        <div ref="container" class="banner overflow-hidden relative" :style="{ height: containerHeight ? `${containerHeight}px` : 'auto'}">
            <img ref="element" @load="onImageLoad" src="/images/home-photo.png" alt="" :style="{ transform: `translateY(${translateY}px)`}" :class="{ isParallaxActive }">
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-banner {
    .banner {
        background: #FF5B35;
        margin: 0 -100px;
        @media (min-width: 1024px) {
          //height: 1000px !important;
          //padding-top: 100px;
        }

        img {
            //height: 3000px;
            margin: 0 auto;
            max-width: calc(100% + 309px);
        }
    }
}
</style>
