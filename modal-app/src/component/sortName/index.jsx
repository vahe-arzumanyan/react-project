import React from "react";
import './style.scss';

class SortName extends React.Component {

    state = {
        name: '',
        nameList: []
    }

    setInputNameChange = (e) => {
        this.setState({name: e.target.value})
        // console.log(this.state.name);
    }


    getSortName = () => {
        const {nameList} = this.state
        nameList.push(this.state.name);
        this.setState({nameList, name: ''})
        console.log(this.state.name)
    }

    render() {
        return <>
            <div className={'G-container'}>
                <div className={'G-flex P-sort-name'}>
                    <label className={'G-flex'}>
                        <p>Type Name</p>
                        <input type='text' value={this.state.name} onChange={this.setInputNameChange}/>
                    </label>
                    <button className={'P-sort-name-button'} type='button' onClick={this.getSortName}>Eenter
                    </button>
                </div>
                <div>
                    <div className={'P-big-div'}>
                        {this.state.nameList.map((item, index) => {
                            return <ol key={index}>{
                                (item % 2 === 0) ? <li className={'G-flex G-flex-column P-div-1'}>{index+1} . {item}</li> :
                                    (item % 2 !== 0) ?  <li className={'G-flex G-flex-column P-div-2'}>{index+1} . {item}></li>
                                        : null
                            }
                            </ol>
                        })}
                    </div>


                </div>

            </div>
        </>
    }
}

export default SortName;