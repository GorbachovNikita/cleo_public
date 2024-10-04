import React from 'react';
import CardItem from '../CardItem/ CardItem';
import './CardList.css';
import { cardData } from '../../../helpers/CardData';
import Search from '../../../components/Search/Search';
import Filter from '../../../components/Filter/Filter';

const CardList = () => {

  return (
    <div className="card-list">

      <div className='item-header'>
        <h1 className='item-title'>Cards</h1>
      </div>

      <Search />
      <Filter />
      
      <div className='grid-card'>
       {cardData.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            stock={card.stock}
            price={card.price}
          />
        ))}
      </div>

      <div className="btnContent-cards">
        <button className="btn-cards">Load More</button>
      </div>
    </div>
  );
};

export default CardList;