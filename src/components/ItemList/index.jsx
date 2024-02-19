import { useState } from "react";
import Item from "../Item";

export default function ItemList({items}) {
    // const [count, setCount] = useState(0)
    return (
        <div className="flex gap-5 flex-wrap justify-center mt-10">
            { items.map((item, index) => <Item item={item} key={index}/>)}
        </div>
    );
}