import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Header from './components/header/index';
import Home from './components/pages/home/index';
import About from './components/pages/about/index';
import Contact from './components/pages/contact/index';

import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


class App extends React.Component {
    render() {
        return <>
            <Header/>


            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/contact'} component={Contact}/>
                <Redirect to={'/Home'}/>
            </Switch>
        </>
    }
}

export default App;
