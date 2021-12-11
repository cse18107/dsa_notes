import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import {NavLink} from 'react-router-dom';


const Header = () =>{
    return <div className="header">
        <div className="header-container">
            <div className="header-logo"><Logo/></div>
            <div className="header-nav-links">
                <div className="link"><NavLink className='navlink' activeClassName="active" to='/'>Home</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/topic'>Topic</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/tutorial'>Tutorial</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/companies'>Companies</NavLink></div>
            </div>
        </div>
    </div>;
}
export default Header;