import React from 'react';
import './NewsCards.page.css';
import NewsCard from '../NewsCard/NewsCard';
import { cards } from '../../../helpers/CardList';

const NewsCards = () => {

  return (
    <div className="card-list">
      {cards.map((card) => (
        <NewsCard
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

export default NewsCards;