import type {Ref} from 'vue'
import {ref} from "vue"

type useParallaxArgument = {
    container: Ref<HTMLElement|null>,
    element: Ref<HTMLElement|null>,
    containerHeightCoeff?: number
}

export default ({container, element, containerHeightCoeff = 2}: useParallaxArgument) => {
    let isParallaxActive = ref<boolean>(false)
    let containerHeight = ref<number>(0)
    let translateY = ref<number>(0)

    const handleScroll = () => {
        if (!container.value || !element.value) {
            return
        }

        const containerTop = container.value.getBoundingClientRect().top
        const containerBottom = container.value.getBoundingClientRect().bottom
        const elementHeight = element.value.getBoundingClientRect().height

        if (containerBottom > 0 && containerTop < window.innerHeight) {
            isParallaxActive.value = true
            const scrollProgress = (window.innerHeight - containerTop) / (window.innerHeight + containerHeight.value)
            containerHeight.value = (elementHeight / containerHeightCoeff)
            translateY.value = -((elementHeight - containerHeight.value) * scrollProgress)
        } else {
            isParallaxActive.value = false
        }
    }

    return {
        handleScroll,
        isParallaxActive,
        containerHeight,
        translateY,
    }
}
