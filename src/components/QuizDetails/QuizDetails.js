import React, { useState } from 'react';
import Option from '../Option/Option';
import QuizResult from '../QuizResult/QuizResult';
import './QuizDetails.css';

const QuizDetails = ({ quiz }) => {
    const { question, options } = quiz;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [showResult, setShowResult] = useState(false)
    const handleAnswerOption = (isCorrect) => {
        if(isCorrect){
           setScore(score+5)
           setCorrectAns(correctAns+1)
        }
    }
    return (
        <div>
            <p className='mx-auto text-black'>Quiz of JavaScript</p>
            <div className='app'>
              <QuizResult></QuizResult>
            <div className="question-section">
                <h5>Score: {score}</h5>
                <div className="question-text">
                    <p>Quiz:{currentQuestion+1}  {question}</p>
                    
                </div>
            </div>
            <div className="answer-section">
                
                {
                    options.map((option, id) => <button className='button' onClick={() => handleAnswerOption(option.isCorrect)} ><Option
                        key={id}
                        option={option}
                        ></Option></button>)
                }

           
                
            </div>


        </div>
        </div>
    );
};

export default QuizDetails;