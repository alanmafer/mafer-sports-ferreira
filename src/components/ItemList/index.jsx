import produto from "../../assets/realMadridHome.png";
import ItemCount from "../ItemCount";
import { useState } from "react";

export default function ItenList() {
    const [count, setCount] = useState(0)
    return (
        <div className="grid-cols-1 sm:grid md:grid-cols-3">
            <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                    <img
                        class="rounded-t-lg"
                        src={produto}
                        alt="Hollywood Sign on The Hill" />
                </a>
                <div class="p-2">
                    <h3
                        class="mb-2 text-md text-left font-medium leading-tight text-neutral-800 text-base">
                        Real Madrid Home 2023/2024
                    </h3>
                    <h5
                        class="mb-2 text-sm text-left text-amber-500 font-medium leading-tight">
                        R$ 150,00
                    </h5>
                </div>
                <ItemCount 
                stock={5}
                count={count}
                setCount={setCount}
                />
            </div>
        </div>
    );
}