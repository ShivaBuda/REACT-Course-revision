import {useState} from "react";

import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import Stats from "../Stats/Stats";
import PackingList from "../PackingList/PackingList";

import "./App.css";

const App = () => {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleTogglePacked(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? {...item, packed: !item.packed} : item,
            ),
        );
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />

            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onTogglePacked={handleTogglePacked}
            />

            <Stats items={items} />
        </div>
    );
};

export default App;
