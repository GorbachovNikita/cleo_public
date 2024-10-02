import React from 'react';
import './NewsCard.page.css'

const NewsCard = ({ title, description, image, createdAt }) => {
    return (
      <div className="card">
        <div>
          {/* <img src={image} alt={title} className="card-image" /> */}
          <div className="card-image"></div> {/* Черный квадрат */}
          <p className="card-date">{createdAt}</p>
        </div>
      <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
       </div>
        <div className='dec'></div>
     </div>
    );
};

export default NewsCard;