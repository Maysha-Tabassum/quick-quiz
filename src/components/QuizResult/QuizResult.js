import React from 'react';
import './QuizResult.css'

const QuizResult = () => {
    return (
        <div className="score-section">
            <h2>Completed!</h2>
            <h4>Total Score 10/20</h4>
            <h4>Your Correct Questions 2 out of 4</h4>
            <button>Play Again</button>
            
        </div>
    );
};

export default QuizResult;