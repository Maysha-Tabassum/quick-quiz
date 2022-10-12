import { convertToHsl } from 'daisyui/src/colors/functions';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import QuizResult from '../QuizResult/QuizResult';
import './Quiz.css'

const Quiz = () => {
    const quizes = useLoaderData().data.questions;
    const [correctAns, setCorrectAns] = useState([]);
    const handleAnswerOption = quiz => {
        console.log(quiz);
        const isCorrect = correctAns.find(correct => correct.id === quiz.id);
        if(isCorrect){
            alert('Correct Answer')
        }        
        else{
            const answer = [...correctAns, quiz];
            setCorrectAns(answer);
        }
    }
    return (
        <div className='quiz-container'>
            <div className='quiz-details-container'>
                {
                quizes.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}
                    handleAnswerOption={handleAnswerOption}

                    ></QuizDetails>)
            }
            </div>
            <div className='quiz-result-container'>
                <QuizResult
                correctAns={correctAns}
                ></QuizResult>
            </div>
        </div>
    );
};

export default Quiz;