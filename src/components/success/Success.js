import React from 'react';
import Button from '../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import './success.css';


const Finish = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'Success'){
            total ++
        }
        return total 

    }, 0)
    return (
        <div className='finished'>
           <ul>
               {props.quiz.map((quizItem, index) => {
                   const icons = (props.results[quizItem.id]) === 'error' ? faTimes : faCheck ;
                   const clc = [
                       'margin',
                       props.results[quizItem.id] === 'error' ? 'error' : 'Success'
                    ]
                    
                   return (
                       <li 
                        key={index}
                       >
                           <strong>{index + 1} </strong>. &nbsp;
                           {quizItem.question}
                           <FontAwesomeIcon icon={icons} className={clc.join(' ')} />
                       </li>
                       
                   )
               })}
               
           </ul>
           <p> правильно {successCount} из {props.quiz.length}</p>
           <div>
               <Button onClick={props.onReplay} type="primary">Повторить</Button>
               <Button  type="success">Перейти в список тестов</Button>
           </div> 
           
           
        </div>
    )
}

export default Finish;