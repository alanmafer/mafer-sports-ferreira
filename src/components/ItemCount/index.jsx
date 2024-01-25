import FeatherIcon from 'feather-icons-react';

export default function CtemCount ({stock, count, setCount}) {
    function handleAdd() {
        if(count < stock) setCount( count + 1);
    }

    function handleRemove(){
        if(count > 0) setCount( count - 1);
    }

    return (
        <div className="flex justify-between mt-4">
            <div className='flex gap-2 items-center'>
                <button onClick={handleRemove}><FeatherIcon icon="minus-circle"/></button>
                <p>{count}</p>
                <button onClick={handleAdd}><FeatherIcon icon="plus-circle"/></button>
            </div>
            {/* <button className="bg-slate-500 rounded px-3 py-1 text-white font-semibold text-xs cursor-pointer hover:bg-amber-500">
                <p>Adicionar ao carrinho</p>
            </button> */}
        </div>              
    )
}