import { useState } from "react";
import ItemCount from "../ItemCount";

export default function ItenListContainer() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <ItemCount 
                stock={5}
                count={count}
                setCount={setCount}
            />
        </div>
    );
}