import React from "react";
// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';
import './App.scss';
import UseRefEvent from "./components/useRefFocus/index";
import UseRefRandom from './components/randomRef/index';




const App = () => {

    return <div>
      {/*<UseRefEvent />*/}
      <UseRefRandom />
    </div>
}

export default App;