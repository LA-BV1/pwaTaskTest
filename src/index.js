import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar'
import { Route, BrowserRouter } from "react-router-dom";
import './styles/index.css';
import App from './App';
import Merchants from './components/merchants/Merchants'
import * as serviceWorker from './serviceWorker';
import { AnimatedSwitch } from 'react-router-transition';

const supportsHistory = "pushState" in window.history;

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.offset}%)`,
    };
}

const bounceTransition = {
    atEnter: {
        opacity: 1,
        offset: 100,
    },
    atLeave: {
        opacity: 0,
        offset: -100,
    },
    atActive: {
        opacity: 1,
        offset: 0,
    },
};


ReactDOM.render(
    <BrowserRouter forceRefresh={!supportsHistory}>
        <Navbar />
        <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
        >
            <Route exact path="/" component={App} />
            <Route path="/merchants" component={Merchants} />
        </AnimatedSwitch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
