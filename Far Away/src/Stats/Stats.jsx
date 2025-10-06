import "./Stats.css";
const Stats = ({items}) => {
    if (!items.length)
        return (
            <footer className="footer">
                <em className="footer">Start by adding your travel items 😂!</em>
            </footer>
        );
    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = (numPacked / numItem) * 100;

    return (
        <footer className="footer">
            <em className="stats">
                {percentage === 100
                    ? "You are ready go!!! 🛩️"
                    : `💼 You have ${numItem} items on your list, and you already packed
                ${numPacked} (${Math.round(percentage)}%).`}
            </em>
        </footer>
    );
};

export default Stats;
