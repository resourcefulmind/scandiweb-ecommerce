import React from "react";
import './Navbar.scss';
import logo from '../../assets/logo.svg';
import { BsCart2, BsChevronDown } from 'react-icons/bs';

class NavBar extends React.Component {
    
    render() { 
        return ( 
            <nav className="scandiweb__ecommerce__navbar-container">
                <ul className="scandiweb__ecommerce__navbar-links">
                  {['women', 'men', 'kids'].map((item) => (
                    <li className="scandiweb__ecommerce__list p-text" key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                        <div />
                    </li>
                  ))}
                </ul>
                <div className="scandiweb__ecommerce__navbar-logo">
                    <img src={logo} alt="Scandiweb eCommerce Logo"/>
                </div>
                <div className="scandiweb__ecommerce__nav-icons">
                    <p>$<span><BsChevronDown /></span></p>

                    <span className="cart-icon"><BsCart2 /></span>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
