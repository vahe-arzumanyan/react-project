import React from "react";
import './style.scss'

class Numbered extends React.Component {

    state = {
        name: '',
        usersList: []
    }

    handleSetName = (e) => {
        this.setState({name: e.target.value})
    }

    handlePrint = (e) => {
        const {usersList} = this.state
        usersList.push(this.state.name);
        this.setState({usersList, name: ''})
    }

    render() {
        return <>
            <div className={'P-input-content G-flex'}>
                <label className={'G-flex'}>
                    <p>Write Text</p>
                    <input className={'P-input'} type='text' value={this.state.name} onChange={this.handleSetName}/>
                </label>
                <button onClick={this.handlePrint} className={'P-click'}>Print Name</button>
            </div>
            <div style={{padding:'15px'}}>
                {this.state.usersList.map((item, index)=>{
                    return <div kay={index}>{index+1}. {item}</div>
                })}
            </div>
        </>
    }
}

export default Numbered;