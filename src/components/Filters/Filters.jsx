import React from 'react';
import './Filters.css';
import CustomSelect from '../Select/Select';
import { InputRange } from '../InputRange/InputRange';
import CloseIcon from '../../assets/icons/close.svg'

const Fiters = (props) => {
    const {labels, options, isOpen, setIsOpen } = props;

    return (
      <div className={`${isOpen ? "block-filters_container": ""}`}>
        <div className={`block-filters ${isOpen ? "open" : ""}`}>
           <div className='filter-header'>
              <h3 className='filter-title'>Filters</h3>
            <button className='close-button' onClick={() => setIsOpen(false)}>
                <img src={CloseIcon} alt='Close' className='close-icon'/>
            </button>
      </div>

          {
            labels.map((label) => {
                return <CustomSelect key={label} label={label} options={options}/>
            })
          }
         
        <div className='select'>
          <p className='select-p'>Price, $</p>
                    <InputRange />
          <div className='select-div'>
            <span className='select-number'>0</span>
            <span className='select-number'>100</span>
          </div>
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
        </div>
    );
};

export default Fiters;