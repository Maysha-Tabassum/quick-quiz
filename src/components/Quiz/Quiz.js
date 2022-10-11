import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizes = useLoaderData().data.questions;
    console.log(quizes);
   
    return (
        <div>
            {
                quizes.map(quiz => <QuizDetails
                    key={quiz.id}
                    quiz={quiz}

                    ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;