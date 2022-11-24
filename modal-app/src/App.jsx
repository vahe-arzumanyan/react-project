import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Header from "./components/header/index";
import Home from '../../modal-app/src/pages/home/index';
import About from '../../modal-app/src/pages/about/index';
import Contact from '../../modal-app/src/pages/contact/index';
import Footer from "../src/components/footer/index";

import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


class App extends React.Component {
    render() {
        return <>
            <Header />
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/contact'} component={Contact}/>
                <Redirect to={'/home'}/>
            </Switch>
            <Footer />
    </>
    }
}

export default App;
