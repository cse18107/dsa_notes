import React,{useState} from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import {NavLink} from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';


const Header = () =>{
    const [show,setShow] = useState(false);
    return <div className="header">
        <div className="header-container">
            <div className="header-logo"><Logo/></div>
            <div className="header-nav-links">
                <div className="link"><NavLink className='navlink' activeClassName="active" to='/'>Home</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/topic'>Topic</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/tutorial'>Tutorial</NavLink></div>
                <div className="link"><NavLink className='navlink'  activeClassName="active" to='/companies'>Companies</NavLink></div>
            </div>
            <div className="hamburger" onClick={()=>setShow(!show)}><HamburgerIcon/></div>
            
        </div>
        <div className={show?"header-hamburger-nav-links-active":"header-hamburger-nav-links-inactive"}>
                <div className="link"><NavLink className='navlink' onClick={()=>setShow(!show)} activeClassName="active" to='/'>Home</NavLink></div>
                <div className="link"><NavLink className='navlink' onClick={()=>setShow(!show)}  activeClassName="active" to='/topic'>Topic</NavLink></div>
                <div className="link"><NavLink className='navlink' onClick={()=>setShow(!show)}  activeClassName="active" to='/tutorial'>Tutorial</NavLink></div>
                <div className="link"><NavLink className='navlink' onClick={()=>setShow(!show)}  activeClassName="active" to='/companies'>Companies</NavLink></div>
            </div>
    </div>;
}
export default Header;