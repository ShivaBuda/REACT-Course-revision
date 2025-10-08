import "./Accordion.css";
import Item from "./Item";
const data = [
    {
        id: 123,
        question: "Where are thes chairs assembled?",
        answer: "These chairs are carefully assembled in Nepal using high-quality materials to ensure durability and comfort for users.",
    },
    {
        id: 124,
        question: "Do you ship to Singapore?",
        answer: "Yes, we do. Just give us your address. We will deliver ot your door within 3 weeks",
    },
    {
        id: 125,
        question: "How long is the warrenty?",
        answer: "We give one to one exhange for 10 years.",
    },
];
const Accordion = () => {
    return (
        <ul className="accordion">
            {data.map((quest, index) => (
                <Item quest={quest} index={index} id={quest.id} />
            ))}
        </ul>
    );
};

export default Accordion;
