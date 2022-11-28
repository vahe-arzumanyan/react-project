import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import NumberedName from '../../modal-app/src/component/numberedName/index'
import Interval from '../../modal-app/src/component/interval/index'
import Product from '../../modal-app/src/component/product/index'
import SortName from '../../modal-app/src/component/sortName/index'
import OddEven from "./component/oddEven";


class App extends React.Component {

    render() {
        return <>
            {/*<NumberedName />*/}
            {/*<Interval />*/}
            {/*<Product/>*/}
        {/*  exercise  start */}
        <SortName />
        {/*<OddEven />*/}
        </>
    }
}

export default App;
