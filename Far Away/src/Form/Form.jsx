import {useState} from "react";
import "./Form.css";

const Form = () => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        const newItem = {
            id: Date.now(),
            description,
            quantity,
            package: false,
        };
        console.log(newItem);

        setDescription("");
        setQuantity(1);
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form__heading">Let's pack for your dream trip?</h3>
            <select
                className="form__select"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}>
                {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                className="form__input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="form__btn">Add</button>
        </form>
    );
};

export default Form;
