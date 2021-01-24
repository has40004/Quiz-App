import React from 'react' ;
import './AnswersItem.css';

const AnswersItem = (props) => {

    // const cls = ['AnswersItem'];
    let cls = 'AnswersItem ';

    if (props.state) {
        // cls.push(props.state)
        cls += props.state;
    } 
    
    return (
        <li 
            // className= {cls.join(' ')} 
            className= {cls} 
            onClick={() => props.onClickAnswer (props.answer.id)}
            >
                
            {props.answer.text}
            

        </li>
    )
};

export default AnswersItem; 