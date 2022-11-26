import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Top from './components/top/index';
import Lorem from "./components/lorem/index";
import Left from "./components/left/index";


const App = () => {
    return <>
        <div>
            <Top/>
            <div className={'G-flex'}>

                <div className={'G-flex hh'}>
                    <Left/>
                    <Lorem/>
                </div>


            </div>


        </div>
    </>
}

export default App;
