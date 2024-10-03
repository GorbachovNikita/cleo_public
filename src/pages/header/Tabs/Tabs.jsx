import React from 'react';
import './Tabs.page.css';
import TopUpIcon from '../../../assets/icons/top-up.svg';
import CartIcon from '../../../assets/icons/cart.svg';
import PersonIcon from '../../../assets/icons/person.svg';

const Tabs = () => {

  return (
    <div className='content-tabs'>
      <h3 className='titleHeader'>Balance: 
         <span className='spanTitle'>300$</span>
      </h3>
      <div className='tab-buttons'>
        <button className='btnHeader'>
            Top up
            <img src={TopUpIcon} alt="Top up" className='icon' />
        </button>
        <button className='btnHeader'>
          Cart
          <img src={CartIcon} alt="Top up" className='icon' />
        </button>
        <button className='btnHeader'>
          Profile
          <img src={PersonIcon} alt="Top up" className='icon' />
        </button>
      </div>
    </div>
  );
};

export default Tabs;