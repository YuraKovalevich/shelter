import React, {useContext} from 'react';
import '../styles/NavBar.scss'
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const NavBar = () => {
    return (
        <div className='wrapper'>
            <nav className="navbar__container">
                <NavLink to={SHOP_ROUTE} className="navbar__logo">
                    <p>React</p>
                </NavLink>
                <div className="menu__icon">
                    <p>Menu icon</p>
                </div>
                <ul className="nav__menu">
                    <li><NavLink to={""}></NavLink></li>
                    <li><NavLink to={""}></NavLink></li>
                    <li><NavLink to={""}></NavLink></li>
                    <li><NavLink to={""}></NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
