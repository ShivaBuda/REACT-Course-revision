import { useState } from "react";
import Steps from "./step/Steps";
import "./App.css";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openClose = () => setIsOpen((isOpen) => !isOpen);

    return (
        <div className="container">
            <button onClick={openClose} className="btn__closeOpen">
                &times;
            </button>
            {isOpen && <Steps />}
        </div>
    );
};

export default App;
