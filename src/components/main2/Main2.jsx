import React from 'react';

import classes from './Main2.module.css';

import limoeiro from '../../assets/UI/limoeiro.svg';

const Main2 = ({ onSetPonte }) => {
    return (
        <div id="main2" className={classes.main2}>
            <div className={classes.title}>
                <img src={limoeiro} alt="Ponte do Limoeiro" />
            </div>
            <div className={classes.info}>
                <div className={classes.dressImgs}>
                    <div className={classes.dressImg1}></div>
                    <div className={classes.dressDiv}>
                        <div className={classes.dressImg2}></div>
                        <div className={classes.dressImg3}></div>
                    </div>
                </div>
                <div className={classes.text}>
                    <div>
                        <p>A Ponte do Limoeiro, inaugurada em 1881, é uma icônica estrutura em Recife, ligando a Avenida Norte ao Cais do Apolo. Suas cores originais representavam a bandeira de Pernambuco, com azul, amarelo e branco. Recentemente, passou por mudanças estéticas controversas, substituindo o parapeito de metal e alterando as cores para vermelho e amarelo.</p>
                        <p>O arquiteto inglês John Hawkshaw se inspirou na arquitetura neoclássica e colonial portuguesa para o design da ponte, resultando em uma combinação de elementos modernos e tradicionais.</p>
                    </div>
                    <button
                        className={classes.saibaMais}
                        onClick={() => {
                            onSetPonte('limoeiro');
                        }}
                    >
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main2;
