import { useState } from "react"

export const useForm = (arraySteps) => {
    const [indexStep, setIndexStep] = useState(0);

    function changeStep(i, e) {
        if(e) e.preventDefault();

        if(i < 0 || i >= arraySteps.length) return;

        setIndexStep(i);
    };

    return {
        indexStep,
        currentComponent: arraySteps[indexStep],
        changeStep,
        isLastStep: indexStep + 1 ===  arraySteps.length ? true : false,
        isFirstStep: indexStep + 1 ===   1 ? true : false,
    };
}