import type {Ref} from "vue"
import {ref} from 'vue'

type UseAnimateArguments = {
    element: Ref<HTMLElement|null>,
    className: string,
}

export default ({element, className}: UseAnimateArguments) => {
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

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animationClass.value = `animate__animated ${className}`;
            }
        });
    };

    return {
        createObserver,
        animationClass,
    }
}
