import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Wallpaper from './components/Wallpaper/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


class App extends React.Component {
    render() {
        return <>
            <Wallpaper/>
            <ul>
                <li>
                    <NavLink to={'/home'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/contact'} component={Contact}/>
                <Redirect to={'/contact'} />
            </Switch>
        </>
    }
}

export default App;
