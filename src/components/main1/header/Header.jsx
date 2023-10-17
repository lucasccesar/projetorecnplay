import React from 'react';
import classes from './Header.module.css';

import logo from '../../../assets/UI/logo.svg';

const Header = ({ onOpenSidebar }) => {
    const material = 'material-symbols-rounded';
    const menu = classes.menu;

    return (
        <header>
            <span className={`${material} ${classes.menu}`} style={{ fontSize: '10vw', overflowY: 'hidden' }} id={classes.menu} onClick={onOpenSidebar}>
                Menu
            </span>
            <img src={logo} alt="logo REC 'N' STYLE" id={classes.logo} />
            <span className={`${material} ${classes.menu}`} style={{ visibility: 'hidden', fontSize: '5vw' }}>
                Menu
            </span>

            <div id={classes.navDesktop}>
                <a href="#section1">SOBRE</a>
                <div id={classes.linhaDoTempoDesktop}>
                    <p>
                        LINHA DO TEMPO{' '}
                        <span className="material-symbols-rounded" style={{display: 'inline', fontSize: '30px'}}>
                            {' '}
                            arrow_drop_down{' '}
                        </span>
                    </p>
                    <div id={classes.dropDownDesktop}>
                        <div>
                            <a href="#main2">PONTE DO LIMOEIRO</a>
                            <a href="#main3">PONTE DE FERRO</a>
                            <a href="#main4">PONTE 6 DE MARÇO</a>
                        </div>
                    </div>
                </div>
                <a href="#main5">QUEM SOMOS</a>
            </div>
        </header>
    );
};

export default Header;
