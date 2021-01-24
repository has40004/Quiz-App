import React, {Component} from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import './layout.css';

class Layout extends Component {

    state={
        menu: false
    }
    toggleMenu = () => {
        this.setState({
            menu : !this.state.menu 
        })
    }
    menuCloseHandler= () => {
        this.setState({
            menu: false
        })
    }
    render() {
        return (
            <div className='layout'>
                <Drawer
                 isOpen={this.state.menu}
                 onClose={this.menuCloseHandler}
                />
                <MenuToggle
                onToggle={this.toggleMenu}
                isOpen={this.state.menu}
                />
                <main >
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;
