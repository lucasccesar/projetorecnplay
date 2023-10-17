import React, { Fragment, useState, useRef, useLayoutEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import classes from './Sidebar.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return {
                slaMarginTop: '2vw',
                dropdownRotate: '-180deg',
                isDropDownOpen: true,
            };
            break;
        case 'close':
            return {
                slaMarginTop: '0vw',
                dropdownRotate: '0deg',
                isDropDownOpen: false,
            };
            break;
    }
};

const Sidebar = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        slaMarginTop: '0vw',
        dropdownRotate: '0deg',
        isDropDownOpen: false,
    });

    const { slaMarginTop, dropdownRotate, isDropDownOpen } = state;

    const ref = useRef(null);

    const expand = () => {
        if (!isDropDownOpen) {
            dispatch({ type: 'open' });
        } else {
            dispatch({ type: 'close' });
        }
        console.log('expand');
    };

    const [testeHeight, setTesteHeight] = useState('0vw');

    useLayoutEffect(() => {
        if (isDropDownOpen) {
            setTesteHeight(ref.current.offsetHeight);
        } else {
            setTesteHeight('0vw');
        }
    }, [isDropDownOpen]);

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <div id={classes.sidebar} className={classes.sidebarHidden} style={{ marginLeft: props.sidebarMargin }}>
                    <div id={classes.sidebarHalf1}>
                        <div id={classes.sidebarAnchors}>
                            <a href="#section1">SOBRE</a>
                            <div>
                                <button id={classes.linhaDoTempo} onClick={expand}>
                                    LINHA DO TEMPO{' '}
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" style={{ transition: '400ms', rotate: dropdownRotate }}>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg>
                                </button>
                                <div id={classes.sla} style={{ marginTop: slaMarginTop, height: testeHeight }}>
                                    <div id={classes.teste} ref={ref}>
                                        <a href="#main2">PONTE DO LIMOEIRO</a>
                                        <a href="#main3">PONTE DE FERRO</a>
                                        <a href="#main4">PONTE 6 DE MARÇO</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#main5">QUEM SOMOS</a>
                        </div>
                        <span className="material-symbols-rounded" id={classes.closeSidebar} onClick={props.onCloseSidebar}>
                            close
                        </span>
                    </div>
                    <div id={classes.sidebarHalf2} onClick={props.onCloseSidebar} style={{ display: props.sidebarHalfDisplay }}></div>
                </div>,
                document.getElementById('sidebar')
            )}
        </Fragment>
    );
};

export default Sidebar;
