import {useState} from "react";
import "./App.css";
import FlashCards from "./Flashcards/FlashCards";
const App = () => {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(step);

    const today = new Date();
    console.log(today.toDateString());
    console.log(today.setDate(today.getDate() + count));

    const stepPlus = function () {
        setStep((step) => step + 1);
    };
    const stepMinus = function () {
        setStep((step) => step - 1);
    };

    const dateFuture = function () {
        setCount((count) => count + step);
    };
    const datePast = function () {
        setCount((count) => count - step);
    };
    return (
        <>
            <div className="container">
                <div className="step">
                    <button className="btn" onClick={stepMinus}>
                        -
                    </button>
                    <p>Step: {step}</p>
                    <button className="btn" onClick={stepPlus}>
                        +
                    </button>
                </div>
                <div className="count">
                    <button className="btn" onClick={datePast}>
                        -
                    </button>
                    <p>Count: {count}</p>

                    <button className="btn" onClick={dateFuture}>
                        +
                    </button>
                </div>
                <p className="message">
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                    {today.toDateString()}
                </p>
            </div>
            <FlashCards />
        </>
    );
};

export default App;
