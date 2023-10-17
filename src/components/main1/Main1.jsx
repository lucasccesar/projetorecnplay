import React from 'react';
import classes from './Main1.module.css';

import Slider from './slider/Slider';
import sobre from '../../assets/UI/sobre.svg';

const Main1 = (props) => {
    return (
        <div id="main1" className={classes.main}>
            {props.children}
            <Slider />
            <div id={classes.catalogue}>
                <p>CATALOGUE SINCE 1950</p>
            </div>
            <span className={classes.anchor} id="section1"></span>
            <div id={classes.sobre}>
                <img src={sobre} alt="sobre" />
                <p>A capital pernambucana é entrecortada por rios extensos e, basta caminhar alguns minutos pelo centro do Recife ou fazer um passeio turístico de catamarã. Uma coleção foi projetada para transparecer as belíssimas paisagens.</p>
                <br />
            </div>
        </div>
    );
};

export default Main1;
