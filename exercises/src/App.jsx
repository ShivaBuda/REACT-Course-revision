import "./App.css";
const App = () => {
    return (
        <div className="container">
            <div className="step">
                <button className="btn">-</button>
                <p>Step: 0</p>
                <button className="btn">+</button>
            </div>
            <div className="count">
                <button className="btn">-</button>
                <p>Step: 0</p>

                <button className="btn">+</button>
            </div>
            <p className="message">26 days from today is Wed Jul 21 2027</p>
        </div>
    );
};

export default App;
