import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = (total + tax + shipping);
    return (
        <div>
              <h2>Order Summary</h2>
                <h5>Items Ordered :-{props.cart.length}</h5>
                <h2>total :- {total.toFixed(2)}</h2>
                <p>Shipping :- {shipping}</p>
                <p>Tax :- {tax.toFixed(2)}</p>
                <p>Grand total :- {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;