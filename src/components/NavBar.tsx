import React, {useContext} from 'react';
import '../styles/NavBar.scss'
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const NavBar = () => {
    return (
        <div className='wrapper'>
            <nav className="navbar__container">
                FakeStore
            </nav>
        </div>
    );
};

export default NavBar;
