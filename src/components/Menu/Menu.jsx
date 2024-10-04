import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <div className='menu'>
        <div className='menu-buttons'>
          <Link to="/" className='menu-button'>
            Cards
          </Link>

          <Link to="/checker" className='menu-button'>
            Checker
          </Link>

          <Link to="/logs" className='menu-button'>
            Logs
          </Link>

          <Link to="/proxy" className='menu-button'>
            Proxy
          </Link>

          <Link to="/sms" className='menu-button'>
            SMS
          </Link>
        </div>
    </div>
    );
};

export default Menu;