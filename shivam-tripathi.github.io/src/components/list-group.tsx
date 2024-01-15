import './list-group.css';

const ListGroup = ({ items, onItemClick = () => {} }: { items: JSX.Element[], onItemClick?: (index: number) => void }) => {
    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="list-group-item"
                    onClick={() => onItemClick(index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ListGroup;
