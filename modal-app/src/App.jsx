import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';



class App extends React.Component {
    state={
        title:'',
        description:'',
        titleColor: '',
        describeColor:'',
        bgColor:'',
        borderR: '',
        titleFontSize:16,
        descriptionFontSize:18,
        uploadFile:''
    }
    render() {
        return <div className={'G-container'}>

            <div>
                <label>
                    <input className={'P-input-title'} style={}/>
                </label>
            </div>








         </div>

    }
}

export default App;
