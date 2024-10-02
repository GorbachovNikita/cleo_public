import React from 'react';
import './CleoNews.page.css';

const CleoNews = () => {
    return (
        <div>
            <div className='news'>
            <img src={''} alt="" className="image" /> 
            <h1 className='title'>Cleo’s news</h1>
            <p className="description">
                Welcome to Cleopatra Shop! Here you will 
                find a wide range of cards, great deals and great prices. On this page 
                you can read our store news and learn about new promotions. Enjoy your shopping!
            </p>
            </div>
        </div>
    );
};

export default CleoNews;