import React from 'react';
import Header from '../../header/Header/Header';
import CardList from '../CardList/CardList';

const Cards = () => {

  return (
      <>
        <Header />
    <div className='container'>
        <CardList />
    </div>
    </>
  );
};

export default Cards;