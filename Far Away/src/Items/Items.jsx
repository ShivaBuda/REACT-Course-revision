const Items = ({item, onDeleteItem, onTogglePacked}) => {
  return (
    <li className="packing__item">
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onTogglePacked(item.id)}
            />
            <span className={item.packed ? "packedItm" : ""}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
  )
}

export default Items


