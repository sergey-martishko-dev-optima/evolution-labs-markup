<script setup lang="ts">
import {ref, onMounted, onUnmounted, nextTick} from 'vue'
import useParallax from "../composables/useParallax.ts"


const container = ref<HTMLDivElement | HTMLElement | null>(null)
const element = ref<HTMLImageElement | null>(null)
const {isParallaxActive, containerHeight, translateY, handleScroll} = useParallax({container, element, containerHeightCoeff: 1.22})

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
        <div ref="container" class="banner overflow-hidden relative">
            <img src="/images/home-photo.png" alt="" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-banner {
    .banner {
        background: #FF5B35;
        margin: 0 0 -2px;
        position: relative;
        @media (min-width: 1024px) {
          //height: 1000px !important;
          //padding-top: 100px;
        }

        img {
            //height: 3000px;
            margin: 0 auto;
            // max-width: calc(100% + 309px);
            max-width: 100%;
        }
    }
}
</style>
