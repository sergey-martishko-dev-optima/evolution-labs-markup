import type {Ref} from "vue"
import {ref} from 'vue'

type UseAnimateArguments = {
    element: Ref<HTMLElement|null>,
    classNames: string[],
}

export default ({element, classNames}: UseAnimateArguments) => {
    const animationClass = ref('');

    const createObserver = () => {
        const options = {
            root: null, // Use the viewport as the container
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        if (element.value) {
            observer.observe(element.value);
        }
    };

    // TODO: add type for entries/entry instead of type any
    const handleIntersect = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                animationClass.value = `animate__animated ${classNames.join(' ')}`;
            }
        });
    };

    return {
        createObserver,
        animationClass,
    }
}
