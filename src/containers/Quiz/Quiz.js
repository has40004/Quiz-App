import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import Finish from '../../components/success/Success'

import './Quiz.css';

class Quiz extends Component {
    state = {
        results: {},
        isFinished : false,
        activeQuestion : 0,
        answerState : null,
        quiz: [
            {
                question : 'Какого цвета небо ?',
                rightAnswerId : 3,
                id : 1,
                answers: [  
                    {text : 'Черный', id :1},
                    {text : 'Зеленый', id:2},
                    {text : 'Синий', id:3},
                    {text : 'Красный', id:4}
                ]
            },
            {
                question : 'В каком году создали Санкт-Петербург ?',
                rightAnswerId : 'c',
                id : 2,
                answers: [  
                    {text : '1700', id :'a'},
                    {text : '1702', id:'b'},
                    {text : '1703', id:'c'},
                    {text : '1083', id:'d'}
                ]
            },
            {
                question : 'Откуда пришло слово Сабир ?',
                rightAnswerId : 'l',
                id : 3,
                answers: [  
                    {text : 'Хасан чудил', id :'f'},
                    {text : 'Абдуллу приснилось', id:'g'},
                    {text : 'Ахмед придумал', id:'h'},
                    {text : 'Аль-Ругми когда то расказал', id:'l'}
                ]
            },
            {
                question : 'Что значит слово " Ку" ?',
                rightAnswerId : 1,
                id : 4,
                answers: [  
                    {text : 'Зуб', id :1},
                    {text : 'нос', id:2},
                    {text : 'Абдулл', id:3},
                    {text : 'Эззу', id:4}
                ]
            },
            {
                question : 'Столица Франции это  ?',
                rightAnswerId : 3,
                id : 5,
                answers: [  
                    {text : 'Москва', id :1},
                    {text : 'Багдад', id:2},
                    {text : 'Париж', id:3},
                    {text : 'ХЗ', id:4}
                ]
            },
            {
                question : 'Ливан это -  ?',
                rightAnswerId : 2,
                id : 6,
                answers: [  
                    {text : 'Еда', id :1},
                    {text : 'Страна', id:2},
                    {text : 'Мяч', id:3},
                    {text : 'Судья', id:4}
                ]
            }
        ]
    }

    onAnswerClickHandel = (answerId) => {

        if ( this. state.answerState) {
            const key = Object.keys(this.state.answerState) [0];
            if ( this.state.answerState[key] === 'Success'){
                return 
            }
        }
    
        const question = this.state.quiz[this.state.activeQuestion] ;
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            
            if ( !results[question.id] ){
                results[question.id] = 'Success';
            }
            this.setState ({
                answerState: { [answerId]: 'Success'},
                results
            })
            const timeOut = window.setTimeout( () => { 
                if (this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                
                }else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null 
                    })
                }
            
                window.clearTimeout(timeOut);

            }, 1000)
            

        }else {
            
            results[question.id] = 'error';
            this.setState({
                answerState: { [answerId]: 'error'},
                results 
            })
            
        }       
    }
    
    isQuizFinished () {
        return this.state.activeQuestion +1 === this.state.quiz.length 

    }
    onReplay = () => {
        this.setState ({
            results: {},
            isFinished : false,
            activeQuestion : 0,
            answerState : null,
        });
    }

    render() {
       
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Ответьете на все вопросы </h1> 
                    <h3 >Внимание! Только первый ответ будет засчитан </h3>
                    {
                        this.state.isFinished ? <Finish
                        results = {this.state.results}
                        quiz = { this.state.quiz}
                        onReplay={this.onReplay}
                        /> 
                        : 
                        <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question = {this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClickHandel = {this.onAnswerClickHandel}
                        quizLength = {this.state.quiz.length}
                        answerNumber = { this.state.activeQuestion + 1}
                        state= {this.state.answerState}
                        
                        />
                    }
                   
                </div>
                

            </div>
        )
        
    }
}
export default Quiz; 