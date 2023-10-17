import React, { Fragment, useEffect, useReducer, useState } from 'react';

import './App.css';
import Header from './components/main1/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main1 from './components/main1/Main1';
import Main2 from './components/main2/Main2';
import Main3 from './components/main3/Main3';
import Main4 from './components/main4/Main4';
import Main5 from './components/main5/Main5';
import SaibaMais from './components/saibaMais/SaibaMais';
import limoeiroAntes from './assets/bridges/limoeiroAntes.png';
import limoeiroDepois from './assets/bridges/limoeiroDepois.png';
import ferroAntes from './assets/bridges/ferroAntes.png';
import ferroDepois from './assets/bridges/ferroDepois.png';
import marcoAntes from './assets/bridges/marcoAntes.png';
import marcoDepois from './assets/bridges/marcoDepois.png';

const reducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return { isSidebarOpen: true, sidebarMargin: '0vw', sidebarHalfDisplay: 'block' };
        case 'close':
            return { isSidebarOpen: false, sidebarMargin: '-40vw', sidebarHalfDisplay: 'none' };
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, {
        isSidebarOpen: false,
        sidebarMargin: '-40vw',
        sidebarHalfDisplay: 'none',
    });

    const { isSidebarOpen, sidebarMargin, sidebarHalfDisplay } = state;

    function openSidebarHandler() {
        dispatch({ type: 'open' });
        document.querySelector('*').style.overflowY = 'hidden';
    }

    function closeSidebarHandler() {
        dispatch({ type: 'close' });
        document.querySelector('*').style.overflowY = 'scroll';
    }

    const [ponte, setPonte] = useState(null);
    const [ponteImgs, setPonteImgs] = useState({ antes: '', depois: '' });

    useEffect(() => {
        if (ponte == 'limoeiro') {
            setPonteImgs({ antes: limoeiroAntes, depois: limoeiroDepois });
        } else if (ponte == 'ferro') {
            setPonteImgs({ antes: ferroAntes, depois: ferroDepois });
        } else if (ponte == 'marco') {
            setPonteImgs({ antes: marcoAntes, depois: marcoDepois });
        }
    }, [ponte]);

    return (
        <Fragment>
            <SaibaMais ponte={ponte} ponteImgs={ponteImgs} onSetPonte={setPonte} />
            <Sidebar onCloseSidebar={closeSidebarHandler} sidebarMargin={sidebarMargin} sidebarHalfDisplay={sidebarHalfDisplay} />
            <Main1>
                <Header onOpenSidebar={openSidebarHandler} />
            </Main1>
            <Main2 onSetPonte={setPonte} />
            <Main3 onSetPonte={setPonte} />
            <Main4 onSetPonte={setPonte} />
            <Main5 />
            <footer>
                <p>REC ’N’ STYLE | Todos os direitos reservados. 2023.</p>
            </footer>
        </Fragment>
    );
}

export default App;
