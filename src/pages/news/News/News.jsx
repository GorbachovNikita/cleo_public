import React from 'react';
import './News.page.css';
import  NewsCards from'../NewsCards/NewsCards';
import CleoNews from '../CleopatraNews/CleopatraNews';
import Header from '../../header/Header/Header'

const News = () => {
    return (
    <>
    <Header />
    <div className='container'>
        <CleoNews />
        <NewsCards />
    </div>
    </>
    );
};

export default News;