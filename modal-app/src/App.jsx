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
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
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
