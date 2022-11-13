import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const addToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart)
        setTotalPrice(product.price + totalPrice)
    };
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => <Products 
                                         key={product.id} 
                                         product={product} 
                                         addToCart={addToCart} />)}
            </div>
            <div className="cart-container">
                <h3 className='text-3xl font-bold underline'>Total summary</h3>
                 <p>Total Product: {cart.length}</p>
                 <p>Total price: ${totalPrice}</p>
            </div>
        </div>
    );
};

export default Shop;