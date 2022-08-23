import React from 'react';
import '../App.css';
import {BiCart} from 'react-icons/bi';

const CartWidget = () => {
    return (
        <div>
            <BiCart className='cart'/>      
        </div>
    );
}

export default CartWidget;
