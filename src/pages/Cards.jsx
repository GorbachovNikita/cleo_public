import React from 'react';
import './Cards.page.css';
import Card from './Card';
import {cards} from'../helpers/CardList';

const CardList = () => {

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          createdAt={card.createdAt}
        />
      ))}
    </div>
  );
};

export default CardList;