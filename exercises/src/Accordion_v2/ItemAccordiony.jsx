const Item = ({quest, index, currOpen, onCurrOpen}) => {
    const isOpen = currOpen === index;

    function handdleToggle() {
        onCurrOpen(index);
    }
    return (
        <li className={`accordion__item ${isOpen ? "openBorder" : ""}`}>
            <h2 className={`question ${isOpen ? "open" : ""}`}>
                <span className="serial">{index + 1}</span> {quest.question}
            </h2>
            <button className="accordion__btn" onClick={handdleToggle}>
                {isOpen ? "-" : "+"}
            </button>
            {isOpen && <p className="accordion__ans">{quest.answer}</p>}
        </li>
    );
};

export default Item;
