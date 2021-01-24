import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import './ActiveQuiz.css';

const ActiveQuiz = props => {
    return (
        <div className='ActiveQuiz'>
            <p className='question'> 
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small> {props.answerNumber} из {props.quizLength}</small>
            </p>
            <AnswersList 
                state={props.state}
                answers={props.answers}
                onClickAnswer = {props.onAnswerClickHandel}
            />

        </div>
    )
}
export default ActiveQuiz;