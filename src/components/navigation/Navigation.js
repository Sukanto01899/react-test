import React from 'react';
import './navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <span>My Shop</span>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/product">Product</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;