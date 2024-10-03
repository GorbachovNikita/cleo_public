import React from 'react';
import './Filter.css';
import FilterIcon from '../../assets/icons/filters.svg';

const Filter = () => {
  return (
    <div className="filter-container">
      <button className="filter-button" aria-label="Filter">
        <img src={FilterIcon} alt="Filter" className="icon-filter" />
      </button>
    </div>
  );
};

export default Filter;