import React, { Fragment, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import classes from './SaibaMais.module.css';

const SaibaMais = ({ ponte, ponteImgs, onSetPonte }) => {
    const [lineLeft, setLineLeft] = useState(50);
    const [imgWidth, setImgWidth] = useState(50);
    const ref = useRef(null);

    if (ponte != null) {
        document.querySelector('*').style.overflowY = 'hidden';
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <div
                        className={classes.wrapperBg}
                        onClick={() => {
                            onSetPonte(null);
                            document.querySelector('*').style.overflowY = 'scroll';
                        }}
                    >
                        <div className={classes.wrapper}>
                            <div className={classes.images}>
                                <div className={classes['img-1']} style={{ backgroundImage: `url(${ponteImgs.antes})` }}></div>
                                <div className={classes['img-2']} style={{ backgroundImage: `url(${ponteImgs.depois})`, width: `${imgWidth}%` }}></div>
                            </div>
                            <div className={classes.slider}>
                                <div className={classes.drag} style={{ left: `${lineLeft}%` }}>
                                    <div className={classes.dragLineUpper}></div>
                                    <div className={classes.dragBall}>
                                        <span style={{ borderLeftColor: '#fff' }}></span>
                                        <span style={{ borderTopColor: '#fff' }}></span>
                                    </div>
                                    <div className={classes.dragLineLower}></div>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="50"
                                    ref={ref}
                                    onInput={() => {
                                        setLineLeft(ref.current.value);
                                        setImgWidth(ref.current.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>,
                    document.getElementById('wrapperBg')
                )}
            </Fragment>
        );
    } else {
        return;
    }
};

export default SaibaMais;
