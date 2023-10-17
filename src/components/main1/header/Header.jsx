import React from 'react';
import classes from './Header.module.css';

import logo from '../../../assets/UI/logo.svg';

const Header = ({ onOpenSidebar }) => {
    const material = 'material-symbols-rounded';
    const menu = classes.menu;

    return (
        <header>
            <span className={material} style={{ fontSize: '10vw', overflowY: 'hidden' }} id="menu" onClick={onOpenSidebar}>
                Menu
            </span>
            <img src={logo} alt="logo REC 'N' STYLE" id={classes.logo} />
            <span className={`${material} ${menu}`} style={{ visibility: 'hidden', fontSize: '5vw' }}>
                Menu
            </span>
        </header>
    );
};

export default Header;
