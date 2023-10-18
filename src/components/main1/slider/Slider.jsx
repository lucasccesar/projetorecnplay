import React, { useState, useRef, useLayoutEffect, useEffect, Fragment } from 'react';

import classes from './Slider.module.css';
import sliderImage1 from '../../../assets/UI/sliderImage1.png';
import sliderImage2 from '../../../assets/UI/sliderImage2.png';
import sliderImage3 from '../../../assets/UI/sliderImage3.png';
import sliderImage4 from '../../../assets/UI/sliderImage4.png';

const Slider = (props) => {
    const [startPoint, setStartPoint] = useState(0);
    const [dragCount, setDragCount] = useState(0);
    const [transition, setTransition] = useState(300);
    const [imageSize, setImageSize] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [sliderTranslate, setSliderTranslate] = useState(0);
    const [slaArray, setSlaArray] = useState(['sliderPositionSelected', null, null, null]);

    const [color, setColor] = useState('#FFFFFF00');
    const [visibility, setVisibility] = useState('hidden');
    const [isVisible, setIsVisible] = useState(false);

    const refDesktop = useRef(null);
    const refMobile = useRef(null);

    useLayoutEffect(() => {
        if (refMobile.current.offsetWidth == 0) {
            setImageSize(refDesktop.current.offsetWidth);
        } else if (refDesktop.current.offsetWidth == 0) {
            setImageSize(refMobile.current.offsetWidth);
        }
    }, []);

    const touchStartHandler = (event) => {
        setTransition(0);
        setStartPoint(event.touches[0].clientX);
    };

    const touchMoveHandler = (event) => {
        if (event.touches[0].clientX - startPoint < 0 && currentImage < 3) {
            setSliderTranslate(event.touches[0].clientX - startPoint - imageSize * currentImage);
        } else if (event.touches[0].clientX - startPoint > 0 && currentImage > 0) {
            setSliderTranslate(event.touches[0].clientX - startPoint - imageSize * currentImage);
        }
        setDragCount(event.touches[0].clientX - startPoint);
    };

    const touchEndHandler = () => {
        if (dragCount < (imageSize / 4) * -1 && currentImage < 3) {
            setTransition(300);
            setSliderTranslate(imageSize * (currentImage + 1) * -1);
            setCurrentImage((currentImage) => currentImage + 1);
        } else if (dragCount > imageSize / 4 && currentImage > 0) {
            setTransition(300);
            setSliderTranslate(imageSize * (currentImage - 1) * -1);
            setCurrentImage((currentImage) => currentImage - 1);
        } else {
            setSliderTranslate(imageSize * currentImage * -1);
        }
        setTransition(300);
    };

    useEffect(() => {
        if (currentImage == 0) {
            setSlaArray(['sliderPositionSelected', null, null, null]);
        } else if (currentImage == 1) {
            setSlaArray([null, 'sliderPositionSelected', null, null]);
        } else if (currentImage == 2) {
            setSlaArray([null, null, 'sliderPositionSelected', null]);
        } else if (currentImage == 3) {
            setSlaArray([null, null, null, 'sliderPositionSelected']);
        }
    }, [currentImage]);

    return (
        <Fragment>
            <div id={classes.sliderMobile} className={classes.slider}>
                <div id={classes.sliderPhotos} draggable="false" onTouchStart={touchStartHandler} onTouchMove={touchMoveHandler} onTouchEnd={touchEndHandler} style={{ transition: `${transition}ms`, transform: `translateX(${sliderTranslate}px)` }}>
                    <div style={{ backgroundImage: `url('${sliderImage1}')` }} className={classes.sliderImage} ref={refMobile}></div>
                    <div style={{ backgroundImage: `url('${sliderImage2}')` }} className={classes.sliderImage}></div>
                    <div style={{ backgroundImage: `url('${sliderImage3}')` }} className={classes.sliderImage}></div>
                    <div style={{ backgroundImage: `url('${sliderImage4}')` }} className={classes.sliderImage}></div>
                </div>
                <div id={classes.sliderPosition}>
                    <div className={`${classes.sliderPositionCount} ${classes[slaArray[0]]}`}></div>
                    <div className={`${classes.sliderPositionCount} ${classes[slaArray[1]]}`}></div>
                    <div className={`${classes.sliderPositionCount} ${classes[slaArray[2]]}`}></div>
                    <div className={`${classes.sliderPositionCount} ${classes[slaArray[3]]}`}></div>
                </div>
            </div>

            <div
                id={classes.sliderDesktop}
                className={classes.slider}
                onMouseEnter={() => {
                    setColor('#FFFFFF');
                    setVisibility('visible');
                    setIsVisible(true);
                }}
                onMouseLeave={() => {
                    setColor('#FFFFFF00');
                    setVisibility('hidden');
                    setIsVisible(false);
                }}
            >
                <div id={classes.sliderPhotos} draggable="false" style={{ transition: `${transition * 2}ms`, transform: `translateX(${sliderTranslate}px)` }}>
                    <div style={{ backgroundImage: `url('${sliderImage1}')` }} className={classes.sliderImage} ref={refDesktop}></div>
                    <div style={{ backgroundImage: `url('${sliderImage2}')` }} className={classes.sliderImage}></div>
                    <div style={{ backgroundImage: `url('${sliderImage3}')` }} className={classes.sliderImage}></div>
                    <div style={{ backgroundImage: `url('${sliderImage4}')` }} className={classes.sliderImage}></div>
                </div>
                <div id={classes.sliderPosition}>
                    <div className={`${classes.sliderPositionCount} ${isVisible == true ? classes[slaArray[0]] : ''}`} style={{ border: `1px solid ${color}` }}></div>
                    <div className={`${classes.sliderPositionCount} ${isVisible == true ? classes[slaArray[1]] : ''}`} style={{ border: `1px solid ${color}` }}></div>
                    <div className={`${classes.sliderPositionCount} ${isVisible == true ? classes[slaArray[2]] : ''}`} style={{ border: `1px solid ${color}` }}></div>
                    <div className={`${classes.sliderPositionCount} ${isVisible == true ? classes[slaArray[3]] : ''}`} style={{ border: `1px solid ${color}` }}></div>
                </div>
                <div id={classes.sliderBtns}>
                    <button
                        style={{ paddingLeft: '1vw', color: color, visibility: visibility }}
                        id={classes.backSlide}
                        className={classes.sliderBtn}
                        onClick={() => {
                            sliderTranslate < 0 && setSliderTranslate((sliderTranslate) => sliderTranslate + imageSize);
                            sliderTranslate < 0 && setCurrentImage((currentImage) => currentImage - 1);
                        }}
                    >
                        <span className="material-symbols-rounded"> arrow_back_ios </span>
                    </button>
                    <button
                        style={{ paddingRight: '1vw', color: color, visibility: visibility }}
                        id={classes.forwardSlide}
                        className={classes.sliderBtn}
                        onClick={() => {
                            sliderTranslate > imageSize * 3 * -1 && setSliderTranslate((sliderTranslate) => sliderTranslate - imageSize);
                            sliderTranslate > imageSize * 3 * -1 && setCurrentImage((currentImage) => currentImage + 1);
                        }}
                    >
                        <span className="material-symbols-rounded" style={{ rotate: '180deg' }}>
                            arrow_back_ios
                        </span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Slider;
