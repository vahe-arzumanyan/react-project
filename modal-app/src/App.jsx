import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import Number from '../src/component/num/index';
import Print from "./component/print";
import Product from './component/product/index';


class App extends React.Component {

    render() {
        return <>
            {/*<Print />*/}
            {/*<Number />*/}
            <Product/>
        </>
    }
}

export default App;
