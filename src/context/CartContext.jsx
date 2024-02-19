import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext(undefined);

export default function CartProvider( {children}) {
    const [cart, setCart] = useState([])

    function addToCart(item) {
        if(isInCart(item.id)){
            setCart(prevCart => {
                const updateCart = prevCart.map(obj => 
                    obj.id === item.id ? {...obj, quantity: obj.quantity + item.quantity } : obj);
                    return updateCart;
            });
            console.log(cart);
        } else {
            setCart([...cart, item]);
        }
    }
    
    function isInCart(itemId) {
        return cart.some(item => item.id === itemId);
    }

    function cartQtd() {
        let quantity = 0;
    
        cart.forEach((item) => {
          quantity += item.quantity;
        });
        
        return quantity;
      }

    return (
        <CartContext.Provider value={{cart, addToCart, cartQtd}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);

    if(!context) {
        throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
    }

    return context;
}
