import React from "react";
import './App.scss';
import './index';
import Info from "./components/info/index";
import List from './components/list/index';

class App extends React.Component {
    render() {
        return <>

        <Info></Info>
            <div className={'G-flex G-justify-around G-flex-wrap P-list'} l>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
                <List></List>

            </div>


</>
    }
}

export default App;
