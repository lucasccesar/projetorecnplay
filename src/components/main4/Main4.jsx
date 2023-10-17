import React from 'react';

import classes from './Main4.module.css';
import marco from '../../assets/UI/marco.svg';

const Main4 = ({ onSetPonte }) => {
    return (
        <div id="main4" className={classes.main4}>
            <div className={classes.title}>
                <img src={marco} alt="Ponte 6 de Março" />
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
                        <p>Na primeira versão de 1642, a ponte uniu os bairros da Boa Vista e São José no Recife, sendo construída por Conde Maurício de Nassau, era de madeira e conectava a Casa da Detenção ao Palácio Nassoviano.</p>
                        <p>Já em 1921, durante o saneamento do Recife, a Ponte 6 de Março foi construída para melhorar a infraestrutura urbana, facilitar o acesso sobre o Rio Capibaribe, homenagear a Revolução Pernambucana de 1817 e promover o desenvolvimento econômico, conservando o patrimônio histórico local.</p>
                    </div>
                    <button
                        className={classes.saibaMais}
                        onClick={() => {
                            onSetPonte('marco');
                        }}
                    >
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main4;
