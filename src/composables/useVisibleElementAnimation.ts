import type {Ref} from "vue"
import { useElementVisibility } from '@vueuse/core'
import {watchEffect, ref} from 'vue'


type Arguments = {
    element: Ref<HTMLElement|null>,
    translateEffect?: boolean,
    opacityEffect?: boolean,
    delay?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000,
    duration?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000,
    transition?: 'vertical' | 'horizontalToRight' | 'horizontalToLeft',
    once?: boolean
}

export default (
    {
        element,
        translateEffect = true,
        opacityEffect = true,
        delay = 100,
        duration = 1000,
        transition = 'vertical',
        once = false,
    }: Arguments
) => {
    const transitionPosition = {
        vertical: { from: 'translate-y-0', to: 'translate-y-12' },
        horizontalToRight: { from: '-translate-x-0', to: '-translate-x-12' },
        horizontalToLeft: { from: 'translate-x-0', to: 'translate-x-12' },
    }
    const isVisible = useElementVisibility(element)
    const classNames = ref<string[]>([])
    const trueCount = ref(0)

    watchEffect(() => {
        if (isVisible.value && trueCount.value < 1) {
            trueCount.value++
        }
    })

    watchEffect(() => {
        classNames.value = [
            'transition-all',
            `transition-duration-${duration}`,
            `transition-delay-${delay}`,
            translateEffect && ((once && trueCount.value < 1) || !once)
                ? isVisible.value
                    ? transitionPosition[transition].from
                    : transitionPosition[transition].to
                : '',
            opacityEffect && ((once && trueCount.value < 1) || !once)
                ? isVisible.value
                    ? 'opacity-100'
                    : 'opacity-0'
                : '',
        ]
    })

    return {
        isVisible,
        classNames,
    }
}
