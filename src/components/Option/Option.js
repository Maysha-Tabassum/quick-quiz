import React from 'react';

const Option = ({option}) => {
    return (
        <div className='flex '>
            <input className='mr-8' type="radio" name="ans" id="ans" />
            <h2>{option}</h2>
        </div>
    );
};

export default Option;