import React from 'react';
import Header from '../../components/Header/Header';
import CartBlock from './CartBlock/CardtBlock'

const Carts = () => {
    return (
    <>
    <Header />
    <div className='container'>
        <CartBlock />
    </div>
    </>
    );
};

export default Carts;