import React from 'react';
import './OrderBlock.css';

const OrderBlock = () => {
    return (
    <div className='order-product'>
            <p className='order-title'>
               Order Summary
            </p>
            
            <div className="cart-search-block">
            <input
               type="text"
               className="cart-input"
               placeholder="Promo Code"
               aria-label="Search"
            />
            <button className="cart-search-button" aria-label="Search">
              Apply
            </button>
            </div>
    
            <div className='price-row'>
             <p className='order-title'>Total Cards</p>
             <span className='cash'>3</span>
            </div>
    
            <div className='price-row'>
             <p className='order-title'>Discount</p>
             <span className='cash'>-10$</span>
            </div>
             
             <span className='decor'></span>

            <div className='price-row'>
              <p className='order-title total'>Total</p>
              <span className='cash'>45$</span>
            </div>
    
            <button className='order-btn buy'>
              Buy all
            </button>
            <button className='order-btn clear-all'>
             Clear all
            </button>
    </div>
    );
};

export default OrderBlock;