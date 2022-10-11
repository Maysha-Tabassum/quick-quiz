import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex ml-8'>
            <input className='items-start' type="radio" name="ans" id="ans" />
            <h2>{option}</h2>
        </div>
    );
};

export default Option;