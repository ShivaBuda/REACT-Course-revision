import "./PackingList.css";

const initialItems = [
    {id: 1, description: "Passport", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 6, packed: true},
];

const PackingList = () => {
    return (
        <ul className="packingList">
            {initialItems.map((item) => (
                <Items item={item} key={item.id} />
            ))}
        </ul>
    );
};

function Items({item}) {
    return (
        <li className="packingItem">
            <input type="checkbox" />
            <span className={item.packed ? "packedItm" : ""}>
                {item.quantity} {item.description}
            </span>
            <button>&times;</button>
        </li>
    );
}

export default PackingList;
