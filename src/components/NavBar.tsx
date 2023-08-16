import React  from 'react';
import styles from '../styles/NavBar.module.scss'
import {Link} from "react-router-dom";
import {BASKET_ROUTE, SHOP_ROUTE} from "../utils/consts";
import basket from '../images/Vector.png'



const NavBar = () => {

    return (
        <div className={styles.header}>
            <div className={styles.navbar__logo}>
                <Link to={SHOP_ROUTE} className={styles.link}>
                    FakeStore
                </Link>
            </div>

            <div className={styles.menuItems}>
                <div className={styles.basket}>
                    <Link to={BASKET_ROUTE} className={styles.favourites}>
                        <img src={basket} alt="basket"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NavBar;

