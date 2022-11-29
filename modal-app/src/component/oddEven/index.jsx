import React from "react";
import './style.scss';

class OddEven extends React.Component {
    state = {
        number: '',
        numberList: [],
        isClicked:false
    }

    setInputResult = (e) => {
        this.setState({number: e.target.value})
    }

    getBtnResult = () => {
        const {numberList} = this.state;
        numberList.push(this.state.number);
        this.setState({numberList, number: ''})
    }


    render() {
        return <>
            <div className={'G-container'}>
                <div className={'G-flex P-oddEven'}>
                    <label className={'G-flex'}>
                        <p>type number</p>
                        <input type='number' onChange={this.setInputResult} value={this.state.number}/>
                    </label>
                    <button onClick={this.getBtnResult}>enter</button>
                </div>
                <div className={'G-flex P-res-odd-even'}>

                    {this.state.numberList.map((item, index) => {
                        return item % 2 === 0 ?
                            <p className={'P-red'} key={index}>{item}</p>
                            : item % 2 !== 0 ?
                                <p className={'P-blue'} key={index}>{item}S</p> : null

                    })}

                </div>


            </div>
        </>
    }
}

export default OddEven;

