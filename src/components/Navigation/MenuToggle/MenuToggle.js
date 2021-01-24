import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import './MenuToglle.css';

const MenuToggle = (props) => {
    let cls = 'MenuToglle';

    if (props.isOpen){
        cls += ' open';
    }

    const icons = props.isOpen? faTimes : faBars ;
    return (

        <FontAwesomeIcon icon={icons} onClick={props.onToggle} className={cls}/>
    )
}
export default MenuToggle;