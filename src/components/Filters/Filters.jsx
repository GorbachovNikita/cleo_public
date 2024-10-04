import React from 'react';
import './Filters.css';
import CustomSelect from '../Select/Select';
import { InputRange } from '../InputRange/InputRange';

const Fiters = (props) => {
    const {labels, options} = props;

    return (
        <div className='block-filters'>
           <div className='filter-header'>
              <h3 className='filter-title'>Filters</h3>
          </div>

          {
            labels.map((label) => {
                return <CustomSelect key={label} label={label} options={options}/>
            })
          }
         
        <div className='select'>
          <InputRange />
        </div>

        <div className='btn-filter-container'>
            <button className='apply-filter btn-filter'>
                Apply
            </button>
            <button className='clear-filter btn-filter'>
                Clear all
            </button>
            </div>
        </div>
    );
};

export default Fiters;