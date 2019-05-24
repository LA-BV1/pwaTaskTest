import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './index.css';
import App from './App';
import Merchants from './components/merchants/Merchants'
import * as serviceWorker from './serviceWorker';

const supportsHistory = "pushState" in window.history;

ReactDOM.render(
    <BrowserRouter forceRefresh={!supportsHistory}>
        <Route
            render={({ location }) => {
                const { pathname } = location;
                return (
                    <TransitionGroup>
                        <CSSTransition
                            key={pathname}
                            classNames="page"
                            timeout={{
                                enter: 1000,
                                exit: 1000
                            }}
                        >
                            <Route
                                location={location}
                                render={() => (
                                    <Switch>
                                        <Route exact path="/" component={App} />
                                        <Route path="/merchants" component={Merchants} />
                                    </Switch>
                                )}
                            />
                        </CSSTransition>
                    </TransitionGroup>
                );
            }}
        />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
