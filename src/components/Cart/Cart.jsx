import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {cart}</p>
            <p>Total Price:</p>
            <p>Total Shipping:</p>
            <p>Tax:</p>
            <p>Grand Total:</p>
            <p></p>
        </div>
    );
};

export default Cart;