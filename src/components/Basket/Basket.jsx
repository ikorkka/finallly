import React from 'react';
import { useSelector } from 'react-redux';

const Basket = () => {
  const cartItems = useSelector((state) => state.cart.items)
  console.log(cartItems);
    return (
        <div>
            
        </div>
    );
};

export default Basket;