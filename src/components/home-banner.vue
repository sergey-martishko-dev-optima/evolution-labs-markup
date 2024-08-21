<script setup lang="ts">
import {ref, onMounted, onUnmounted, nextTick} from 'vue'
let isParallaxActive = ref<boolean>(false)
let containerHeight = ref<number>(0)
let translateY = ref<number>(0)
const container = ref<HTMLDivElement | HTMLElement | null>(null)
const image = ref<HTMLImageElement | null>(null)

const handleScroll = () => {
    if (!container.value || !image.value) {
        return
    }

    const containerTop = container.value.getBoundingClientRect().top
    const containerBottom = container.value.getBoundingClientRect().bottom
    const imageHeight = image.value.getBoundingClientRect().height

    console.log(imageHeight, containerHeight.value)

    if (containerBottom > 0 && containerTop < window.innerHeight) {
        isParallaxActive.value = true
        const scrollProgress = (window.innerHeight - containerTop) / (window.innerHeight + containerHeight.value)
        containerHeight.value = (imageHeight / 2)
        translateY.value = -((imageHeight - containerHeight.value) * scrollProgress)
    } else {
        isParallaxActive.value = false
    }
}

const onImageLoad = () => {
    if (!image.value) {
        return
    }
    handleScroll()
}

onMounted(() => {
    console.log('--- mounted')
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
            <img ref="image" @load="onImageLoad" src="/images/home-photo.png" alt="" :style="{ transform: `translateY(${translateY}px)`}" :class="{ isParallaxActive }">
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-banner {
    .banner {
        background: #FF5B35;
        margin: 0 -100px;

        img {
            margin: 0 auto;
        }
    }
}
</style>
