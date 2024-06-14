import { useState } from "react";

const UseCart =() =>{

    
    const [cart, setCart] = useState([]);
  
    const removeRoom = (id) => {
        setCart(cart.filter(room => room.id !== id));
    };

    const totalCost = cart.reduce((total, room) => total + room.price, 0);

    const getCartSize = () => {
        let quantity = 0
    
        Object.values(cart)
          .forEach(({ quantity: productQuantity }) => (quantity += productQuantity))
    
        return quantity
    }

    return {
        removeRoom,
        getCartSize,
        totalCost,
        removeRoom,
        cart
    }


}

export default UseCart 