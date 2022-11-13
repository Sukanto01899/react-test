import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './products.css';


const Products = ({product, addToCart}) => {
    const {img, name, price, seller} = product
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3>{name}</h3>
                <p>${price}</p>
                <p><small>Manifacture: {seller}</small></p>
            </div>
            <button onClick={()=> addToCart(product)}><span>Add To Cart</span> <span><FontAwesomeIcon icon={faCartPlus}/></span> </button>
        </div>
    );
};

export default Products;