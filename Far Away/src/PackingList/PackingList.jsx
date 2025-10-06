import "./PackingList.css";

// const initialItems = [
//     {id: 1, description: "Passport", quantity: 2, packed: false},
//     {id: 2, description: "Socks", quantity: 6, packed: true},
// ];

const PackingList = ({items, onDeleteItem, onTogglePacked}) => {
    return (
        <>
            <ul className="packingList">
                {items.map((item) => (
                    <Items
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onTogglePacked={onTogglePacked}
                        key={item.id}
                    />
                ))}
            </ul>
        </>
    );
};

function Items({item, onDeleteItem, onTogglePacked}) {
    return (
        <li className="packingItem">
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onTogglePacked(item.id)}
                // onChange={() => onTogglePacked(item.id)}
            />
            <span className={item.packed ? "packedItm" : ""}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    );
}

export default PackingList;
