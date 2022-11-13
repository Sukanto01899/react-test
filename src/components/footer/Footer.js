import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <div className="address">
                    <h1>My Shop</h1>
                    <address>
                        <p>Kutubdia, Coxbazar</p>
                        <p>sukanto01899@gmail.com</p>
                        <p>Help: 01860385185</p>
                        <p>Bangaldesh</p>
                        <button>Playstore</button>
                    </address>
                </div>
                <div className="footer-link">
                    <a href="/blog">Blog</a>
                    <a href="/blog">About</a>
                    <a href="/blog">Privacy</a>
                    <a href="/blog">Refound</a>
                </div>
                <div className="footer-pay">
                    <p>Bikash</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;