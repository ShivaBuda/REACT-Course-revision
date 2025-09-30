import "./App.css";

const App = () => {
    return (
        <div className="container">
            <h1 className="title">Steps</h1>
            <div className="steps">
                <span className="step active">1</span>
                <span className="step">2</span>
                <span className="step">3</span>
            </div>
            <p className="steps__msg">Step 1 : This is step one</p>
            <div className="btns">
                <button className="btn btn__prev">Previous</button>
                <button className="btn btn__next">Next</button>
            </div>
        </div>
    );
};

export default App;
