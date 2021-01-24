import React, { Component } from 'react' 
import Backdrop from '../../UI/Backdrop/Backdrop'
import './Drawer.css';
const link = [
    1, 2, 3
]
class Drawer extends Component {
    renderLinks(){
        return  link.map((link, index) => {
            return (
                <li key={index}>
                    <a href='f'> link {link}</a>
                </li>
            )
        })
    }
    render () {
        let cls = 'Drawer';
        if ( !this.props.isOpen){
            cls += '  close'
        }
        return (
            <>
            <nav className={cls}>
                <ul>
                    {this.renderLinks()}
                </ul>

            </nav>
            {this.props.isOpen? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        )
    }
}
export default Drawer;