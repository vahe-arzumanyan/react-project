import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss'
import main from './assets/image/main.jpg';

class App extends React.Component {
    render() {
        return <header className={'G-image-cover P-header-image-cover'} style={{backgroundImage: `url(${this.props.main})`}}>

        </header>

    }
}

export default App;
