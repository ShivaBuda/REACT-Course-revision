import {useState} from "react";
import "./Steps.css"

const messages = [
    "Learn REACT",
    "Create projects",
    "Enjoy REACT developer job",
];
const Steps = () => {
    const [step, setStep] = useState(1);
    const handlerPrev = () => {
        if (step > 1) setStep(step - 1);
    };
    const handlerNext = () => {
        if (step < 3) setStep(step + 1);
    };

    return (
        <>
            <h1 className="title">Steps</h1>
            <div className="steps">
                <span className={`step ${step >= 1 ? "active" : ""}`}>1</span>
                <span className={`step ${step >= 2 ? "active" : ""}`}>2</span>
                <span className={`step ${step >= 3 ? "active" : ""}`}>3</span>
            </div>
            <p className="steps__msg">
                Step {step}: {messages[step - 1]}
            </p>
            <div className="btns">
                <button className="btn btn__prev" onClick={handlerPrev}>
                    Previous
                </button>
                <button className="btn btn__next" onClick={handlerNext}>
                    Next
                </button>
            </div>
        </>
    );
};

export default Steps;
