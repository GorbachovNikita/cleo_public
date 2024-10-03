import React from 'react';
import './Menu.page.css'

const Menu = () => {
    return (
      <div className='menu'>
        <div className='menu-buttons'>
          <button className='menu-button'>Cards</button>
          <button className='menu-button'>Checker</button>
          <button className='menu-button'>Logs</button>
          <button className='menu-button'>Proxy</button>
          <button className='menu-button'>SMS</button>
        </div>
    </div>
    );
};

export default Menu;