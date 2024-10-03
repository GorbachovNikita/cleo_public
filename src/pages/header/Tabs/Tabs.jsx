import React from 'react';
import './Tabs.page.css';
import TopUpIcon from '../../../assets/icons/top-up.svg';
import CartIcon from '../../../assets/icons/cart.svg';
import PersonIcon from '../../../assets/icons/person.svg';
import  MenuIcon from '../../../assets/icons/menu.svg';

const Tabs = () => {

  return (
 <div className='content-tabs'>
  <h3 className='titleHeader'>
    Balance: <span className='spanTitle'>$300</span>
  </h3>
  <div className='tab-buttons'>
    <button className='btnHeader' aria-label="Top up balance">
      Top up
      <img src={TopUpIcon} alt="Top up" className='icon' />
    </button>
    <button className='btnHeader' aria-label="View cart">
      Cart
      <img src={CartIcon} alt="Cart" className='icon' />
    </button>
    <button className='btnHeader' aria-label="View profile">
      Profile
      <img src={PersonIcon} alt="Profile" className='icon' />
    </button>
  </div>
  <div className='btnHeader-mobile'>   
     <button className='btnHeader' aria-label="View profile">
      <img src={PersonIcon} alt="Profile" className='icon' />
    </button>
      <button className='btnHeader-mobile btnHeader' aria-label="View profile">
        <img src={MenuIcon} alt="Profile" className='icon' />
    </button>

  </div>
</div>
  );
};

export default Tabs;