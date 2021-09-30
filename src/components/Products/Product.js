import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img, seller, price, stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img className='product-img' src={img} alt="" />
            </div>
            <div className='product-info'>
                <h3>{name}</h3>
                <p><small>By : {seller}</small></p>
                <h5>Price : {price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleToCart(props.product)} className='btn-regualr'>{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;