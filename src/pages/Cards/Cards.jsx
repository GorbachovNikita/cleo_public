import React from 'react';
import './Cards.css'
import Header from '../../components/Header/Header';
import CardList from './CardList/CardList';

const Cards = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <CardList />
    </div>
    </>
  );
};

export default Cards;