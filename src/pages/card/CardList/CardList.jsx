import React from 'react';
import CardItem from '../CardItem/CardItem';
import './CardList.page.css';
import SearchIcon from '../../../assets/icons/search.svg';
import FilterIcon from '../../../assets/icons/filters.svg'

const CardList = () => {
  const cardData = [
    { id: 1, title: 'Card 315684', price: 15, stock: 8 },
    { id: 2, title: 'Card 215439', price: 20, stock: 5 },
    { id: 3, title: 'Card 879654', price: 10, stock: 10 },
    { id: 4, title: 'Card 315684', price: 15, stock: 8 },
    { id: 5, title: 'Card 215439', price: 20, stock: 5 },
    { id: 6, title: 'Card 879654', price: 10, stock: 10 },
    { id: 7, title: 'Card 315684', price: 15, stock: 8 },
    { id: 8, title: 'Card 215439', price: 20, stock: 5 },
    { id: 9, title: 'Card 879654', price: 10, stock: 10 },
    { id: 10, title: 'Card 879654', price: 10, stock: 10 },
    { id: 11, title: 'Card 879654', price: 10, stock: 10 },
    { id: 12, title: 'Card 879654', price: 10, stock: 10 },
    { id: 13, title: 'Card 879654', price: 10, stock: 10 },
    { id: 14, title: 'Card 879654', price: 10, stock: 10 },
    { id: 15, title: 'Card 879654', price: 10, stock: 10 },
    { id: 16, title: 'Card 879654', price: 10, stock: 10 },
    { id: 17, title: 'Card 879654', price: 10, stock: 10 },
    { id: 18, title: 'Card 879654', price: 10, stock: 10 },
  ];


  return (
    <div className='card-list'>
      <div className='item-header'>
        <h1 className='item-title'>Cards</h1>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" aria-label="Search" />
        <button className="search-button" aria-label="Search">
          <img src={SearchIcon} alt="Search" className='icon-search' />
        </button>
      </div>
      <div className="filter-container">
        <button className="filter-button" aria-label="Filter">
          <img src={FilterIcon} alt="Search" className='icon-filter' />
        </button>
      </div>
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
      <div className='btnContent-cards'>
     <button className="btn-cards">Load More</button>
    </div>
    </div>
  );
};

export default CardList;