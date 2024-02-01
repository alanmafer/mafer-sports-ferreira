import { useState } from "react";
import Item from "../Item";

export default function ItemList({items}) {
    // const [count, setCount] = useState(0)
    return (
        <div>
            { items.map((item, index) => <Item item={item} key={index}/>)}
        </div>
    );
}