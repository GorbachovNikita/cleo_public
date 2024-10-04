import React, { useState } from 'react';
import './CardItem.css';

const CardItem = ({ title, stock, price }) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    if (count < stock) setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <article className="card-item">

      <h4 className='article-title'>
        {title}
      </h4>

      <div className='article-block'>
        
        <div className='article-counter'>
          <p className='article-p'>
            In stock: {stock}
          </p>

          <div className='counter-controls'>
            <button className='counter-btn' onClick={increaseCount}>
              +
            </button>
            <p className='counter-value'>
              {count}
            </p>
            <button className='counter-btn' onClick={decreaseCount}>
              -
            </button>
          </div>
        </div>

        <div className='article-footer'>
          <p className='article-price'>
            {price * count}$
          </p>
          <button className='article-btn'>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardItem;