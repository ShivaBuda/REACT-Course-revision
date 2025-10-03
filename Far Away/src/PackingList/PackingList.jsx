import "./PackingList.css";

const initialItems = [
    {id: 1, description: "Passport", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 6, packed: false},
];
const PackingList = () => {
    return (
        <ul className="packingList">
            <li className="packingList__itm">
                <input type="checkbox" name="" id="" />
                Packinglist
            </li>
        </ul>
    );
};

export default PackingList;
