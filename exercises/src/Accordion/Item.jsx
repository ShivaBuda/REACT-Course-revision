import {useState} from "react";

const Item = ({quest, index}) => {
    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <li className="accordion__item">
            <h2 className={`question ${open ? "open" : ""}`}>
                <span className="serial">{(index+1)}</span> {quest.question}
            </h2>
            <button className="accordion__btn" onClick={() => setOpen(!open)}>
                {open ? "-" : "+"}
            </button>
            {open && <p className="accordion__ans">{quest.answer}</p>}
        </li>
    );
};

export default Item;
