import {useState} from "react";
import "./DateCounter.css";

const DateCounter = () => {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(1);

    const today = new Date();
    //     today.toDateString();
    today.setDate(today.getDate() + count);

    const handleIncreaseValue = function () {
        setCount((count) => count + step);
    };
    const handleDecreaseValue = function () {
        setCount((count) => count - step);
    };
    const handleReset = function () {
        setStep(0);
        setCount(1);
    };

    return (
        <div className="dateCounter">
            <div className="dateCounter__range">
                <input
                    value={step}
                    onChange={(e) => setStep(+e.target.value)}
                    type="range"
                    min={0}
                    max={20}
                />
                <span>{step}</span>
            </div>
            <div className="btns">
                <button
                    onClick={handleDecreaseValue}
                    className="dateCounter__btn">
                    -
                </button>
                <input
                    className="dateCounter__input"
                    type="number"
                    value={count}
                    onChange={(e) => setCount(+e.target.value)}
                />
                <button
                    onClick={handleIncreaseValue}
                    className="dateCounter__btn">
                    +
                </button>
            </div>
            <p className="dateCounter__msg">
                {count === 0
                    ? "Today is "
                    : count > 0
                    ? `${count} days from today is `
                    : `${Math.abs(count)} days ago was `}
                {today.toDateString()}
            </p>

            {step !== 0 || count !== 1 ? (
                <button onClick={handleReset} className="btn-reset">
                    RESET
                </button>
            ) : null}
        </div>
    );
};

export default DateCounter;
