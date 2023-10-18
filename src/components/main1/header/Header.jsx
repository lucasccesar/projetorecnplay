import React, { useState, useRef, useLayoutEffect } from 'react';
import classes from './Header.module.css';

import logo from '../../../assets/UI/logo.svg';

const Header = ({ onOpenSidebar }) => {
    const [timelineOpen, setTimelineOpen] = useState(0);
    const [arrowRotate, setArrowRotate] = useState('0deg');
    const [divSize, setDivSize] = useState(0);

    const ref = useRef(null);

    useLayoutEffect(() => {
        setDivSize(ref.current.offsetHeight);
    }, []);

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
                <div
                    id={classes.linhaDoTempoDesktop}
                    onMouseEnter={() => {
                        setTimelineOpen(divSize);
                        setArrowRotate('-180deg');
                    }}
                    onMouseLeave={() => {
                        setTimelineOpen(0);
                        setArrowRotate('0deg');
                    }}
                >
                    <p>
                        LINHA DO TEMPO{' '}
                        <span className="material-symbols-rounded" style={{ display: 'inline', fontSize: '30px', rotate: arrowRotate }}>
                            {' '}
                            arrow_drop_down{' '}
                        </span>
                    </p>
                    <div id={classes.dropDownDesktop} style={{ height: `${timelineOpen}px` }}>
                        <div ref={ref}>
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
