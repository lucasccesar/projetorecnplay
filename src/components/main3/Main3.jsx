import React from 'react';

import classes from './Main3.module.css';
import ferro from '../../assets/UI/ferro.svg';

const Main3 = ({ onSetPonte }) => {
    return (
        <div id="main3" className={classes.main3}>
            <div className={classes.title}>
                <img src={ferro} alt="Ponte de Ferro" />
            </div>
            <div className={classes.info} id="info2">
                <div className={classes.dressImgs}>
                    <div className={classes.dressImg1}></div>
                    <div className={classes.dressDiv}>
                        <div className={classes.dressImg2}></div>
                        <div className={classes.dressImg3}></div>
                    </div>
                </div>
                <div className={classes.text}>
                    <div>
                        <p>A Ponte da Boa Vista em Recife, Brasil, é uma estrutura histórica com mais de 300 anos de existência, tendo passado por diversas reconstruções ao longo de sua história. Ela desempenhou um papel crucial na mobilidade da cidade, na conectividade entre bairros e testemunhou eventos históricos importantes.</p>
                        <p>Atualmente, é um marco arquitetônico e cultural, atraindo turistas e mantendo sua relevância na identidade de Recife. Sua preservação contínua é fundamental para manter seu valor histórico e cultural.</p>
                    </div>
                    <button
                        className={classes.saibaMais}
                        onClick={() => {
                            onSetPonte('ferro');
                        }}
                    >
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main3;
