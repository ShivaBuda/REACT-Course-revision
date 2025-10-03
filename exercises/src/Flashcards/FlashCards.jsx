import {useState} from "react";
import "./FlashCards.css";

const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript",
    },
    {
        id: 3458,
        question: "What are the building blocks of React apps?",
        answer: "Components",
    },
    {
        id: 3459,
        question:
            "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX",
    },
    {
        id: 3460,
        question: "How to pass data from parent to child components?",
        answer: "Props",
    },
    {
        id: 3461,
        question: "How to give components memory?",
        answer: "useState hook",
    },
    {
        id: 3462,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element",
    },
];

//  THIS METHOD SELECT ALL CLICKED ITEMS
// const FlashCards = () => {
//     return (
//         <ul className="card__items">
//             {questions.map((question) => (
//                 <Card question={question} key={question.id} />
//             ))}
//         </ul>
//     );
// };

// function Card({question}) {
//     const [selectedId, setSelectedId] = useState(null);

//     const handleClick = (id) => {
//         setSelectedId(null);
//         setSelectedId(id !== selectedId ? id : null);
//     };

//     return (
//         <li
//             className={`card__item ${
//                 question.id === selectedId ? "selected" : ""
//             } `}
//             onClick={() => handleClick(question.id)}>
//             {question.id === selectedId ? question.answer : question.question}
//         </li>
//     );
// }

// THIS METHOD SELECT ONCE AT A TIME
const FlashCards = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id) => {
        setSelectedId(null);
        setSelectedId(id !== selectedId ? id : null);
    };
    return (
        <ul className="card__items">
            {questions.map((question) => (
                <li
                    className={`card__item ${
                        question.id === selectedId ? "selected" : ""
                    } `}
                    onClick={() => handleClick(question.id)}
                    key={question.id}>
                    {question.id === selectedId
                        ? question.answer
                        : question.question}
                </li>
            ))}
        </ul>
    );
};

export default FlashCards;
