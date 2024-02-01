import ItemList from "../ItemList";
import produtos from "../../api";

export default function ItenListContainer() {
    return (
        <div>
            <ItemList
                items={produtos}
            />
        </div>
    );
}