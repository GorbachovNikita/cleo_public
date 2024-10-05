import React from 'react';
import './News.page.css';
import NewsCards from '../NewsCards/NewsCards';
import CleoNews from '../CleopatraNews/CleopatraNews';
import Header from '../../../components/Header/Header';
import CryptoBlock from '../../../components/CryptoBlock/CryptoBlock';

const News = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className='left-column'>
                    <CleoNews/>
                    <NewsCards/>
                </div>
                <CryptoBlock/>
            </div>
        </>
    );
};

export default News;