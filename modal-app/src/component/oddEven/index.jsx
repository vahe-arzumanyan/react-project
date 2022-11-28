import React from "react";


class OddEven extends React.Component {
    state = {
        number: '',
        numberList: ''
    }

    setInputNumber = (e) => {
        this.setState({number: e.target.value})
    }

    getBtnNumber = (e) => {
        const {numberList} = this.state
        numberList.push(this.state.number);
        this.setState({numberList, number : ''})
        console.log(this.state.numberList)
    }

    render() {
        return <>
            <div className={'G-flex'}>
                <label>
                    <input type='number' value={this.state.number} onChange={this.setInputNumber}/>
                </label>
                <button type='btn' onClick={this.getBtnNumber}>enter</button>
            </div>
        </>
    }
}

export default OddEven;