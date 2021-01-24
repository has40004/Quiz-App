import React from 'react' ;
import './Button.css';

const Button = (props) => {
    const clc = [
        'Button',
        [props.type]
    ]
    return (
        <button
            onClick={props.onClick}
            className={clc.join(' ')}
            disabled={props.disabled}

        >
            {props.children}
        </button>
    )
}

export default Button;
