import React from 'react';
import './News.page.css';
import  NewsCards from'../NewsCards/NewsCards';
import CleoNews from '../CleopatraNews/CleopatraNews';

const News = () => {
    return (
       <div className='content'>
        <CleoNews />
        <NewsCards />
       </div>
    );
};

export default News;