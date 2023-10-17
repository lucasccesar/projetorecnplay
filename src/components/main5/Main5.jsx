import React from 'react';

import classes from './Main5.module.css';
import quemSomos from '../../assets/UI/quemSomos.svg';
import x from '../../assets/UI/x.svg';

const Main5 = () => {
    return (
        <div id="main5" className={classes.main5}>
            <img src={quemSomos} alt="Quem Somos" id={classes.quemSomosTitle} />
            <p id={classes.quemSomosText}>Somos estudantes que valorizam a cultura pernambucana; montamos um projeto baseado nas pontes em embelezam a nossa veneza brasileira unindo tecnologia e moda para revolucionar o Recife.</p>
            <div id={classes.quemSomosDiv}>
                <div className={classes.photoDiv}>
                    <div className={classes.photo}></div>
                    <p>DESENVOLVEDORES DO MEDIOTEC SENAC</p>
                </div>
                <img src={x} alt="X" style={{ height: '30vw' }} id={classes.x} />
                <div className={classes.photoDiv}>
                    <div className={classes.photo}></div>
                    <p>ESTILISTAS DA FACULDADE DE MODA SENAC</p>
                </div>
            </div>
        </div>
    );
};

export default Main5;
