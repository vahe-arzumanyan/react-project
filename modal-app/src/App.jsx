import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';
import NumberedName from '../../modal-app/src/component/numberedName/index'
import Interval from '../../modal-app/src/component/interval/index'
import Product from '../../modal-app/src/component/product/index'
import SortName from '../../modal-app/src/component/sortName/index'


class App extends React.Component {

    render() {
        return <>
            {/*<NumberedName />*/}
            {/*<Interval />*/}
            {/*<Product/>*/}
        {/*  exercise  */}
        <SortName />
        </>
    }
}

export default App;
