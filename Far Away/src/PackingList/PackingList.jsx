import {useState} from "react";
import Items from "../Items/Items";
import "./PackingList.css";

// const initialItems = [
//     {id: 1, description: "Passport", quantity: 2, packed: false},
//     {id: 2, description: "Socks", quantity: 6, packed: true},
// ];

const PackingList = ({items, onDeleteItem, onTogglePacked, onClearList}) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="packing">
            <ul className="packing__list">
                {sortedItems.map((item) => (
                    <Items
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onTogglePacked={onTogglePacked}
                        onClearList={onClearList}
                        key={item.id}
                    />
                ))}
            </ul>
            <div className="packing__sortItems">
                <select
                    className="packing__sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <buton className="clearList" onClick={onClearList}>
                    Clear list
                </buton>
            </div>
        </div>
    );
};

export default PackingList;
