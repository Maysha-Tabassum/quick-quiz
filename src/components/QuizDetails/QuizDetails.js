import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
import './QuizDetails.css';

const QuizDetails = ({ quiz, handleAnswerOption }) => {
    const { question, options, id } = quiz;



    return (
        <div>
          
            <div className='app'>

                <div className="question-section">
                <p className='mx-auto text-black'>Quiz of {id}</p>
                    <div className="question-text">
                        <p>Quiz:  {question}</p>

                    </div>
                </div>
                <div className="answer-section">

                    {
                        options.map((option, id) => <button className='button' onClick={() => handleAnswerOption(quiz)} ><Option
                            key={id}
                            option={option}
                        ></Option></button>)
                    }

                    <ToastContainer></ToastContainer>
                </div>


            </div>
        </div>
    );
};

export default QuizDetails;