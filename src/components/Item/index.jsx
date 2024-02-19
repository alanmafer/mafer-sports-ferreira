import React from 'react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Item({item}) {  
    const { addToCart } = useCart();
    
    const [quantity, setQuantity] = useState(0);

    function submit() {
        addToCart({
            ...item,
            quantity
        })
    }
    return (

    <div className="text-gray-700 relative w-96 p-4 rounded-lg flex flex-col justify-between shadow-lg">
        <div className="h-full object-cover roundedl">
            <img
                src={item.pictureUrl}
                alt="card-image" className="object-cover w-full h-full"
            />
        </div>
        <div className="p-2">
            <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {item.title}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {item.price}
                </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {item.description}
            </p>
        </div>
        <div className="flex justify-between mt-4">
            <div className='flex gap-2 items-center'>
                <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className='border-2 border-gray-700 rounded w-5 h-5'>
                    <p className='relative top-[-5px] text-gray-700'>-</p>
                </button>
                <p>{ quantity }</p>
                <button onClick={() => quantity < item.quantityAvaiable && setQuantity(quantity + 1)} className='border-2 border-gray-700 rounded w-5 h-5'>
                    <p className='relative top-[-5px] text-gray-700'>+</p>
                </button>
            </div>
            <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 bg-green-500 ml-6"
            type="button">
                Adicionar ao carrinho
            </button>
        </div>
    </div> 
    );
}