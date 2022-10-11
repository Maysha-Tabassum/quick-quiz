import React from 'react';

const QuizDetails = ({quiz}) => {
    const {id} = quiz;
    return (
        <div>
            <h2>Quiz about: {id}</h2>
        </div>
    );
};

export default QuizDetails;