import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Top from './components/top/index';
import Left from './components/lorem/index';
import Lorem from "./components/right";


const App = () => {
    return <>
        <div>
            <Top/>
            <div className={'G-flex'}>

                <div className={'G-flex hh'}>
                    <Lorem/>
                    <Left/>
                </div>


            </div>


        </div>
    </>
}

export default App;
