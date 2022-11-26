import React from "react";
import './style.scss'

class Print extends React.Component {

    state = {
        minNum: '',
        maxNum: '',
        arrEmpty: []
    }

    handleSetMinNum = (e) => {
        this.setState({minNum: e.target.value})
    }

    handleSetMaxNum = (e) => {
        this.setState({maxNum: e.target.value})
    }

    handleConnect = () => {
        let {minNum, maxNum, arrEmpty} = this.state
        let x = []
        for (+minNum; +minNum <= +maxNum; +minNum++) {
            x.push(minNum)
        }
        this.setState({arrEmpty: x})

    }

    render() {
        return <>
            <div className={'P-num-content G-flex'}>
                <label className={'G-flex'}>
                    <p>min number</p>
                    <input className={'P-num'} type='number' value={this.state.minNum} onChange={this.handleSetMinNum}/>
                </label>
                <label className={'G-flex'}>
                    <p>max number</p>
                    <input className={'P-num'} type='number' value={this.state.maxNum} onChange={this.handleSetMaxNum}/>
                </label>
                <button onClick={this.handleConnect} className={'P-click'}>print number</button>
            </div>

            <div>
                {this.state.arrEmpty.map((item, index) => {
                    return <span key={index} style={{color: item % 2 !== 0 ? 'red' : ''}}>{item}
                    </span>
                })}
            </div>

        </>
    }
}

export default Print;