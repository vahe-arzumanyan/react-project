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
                    <div className={' P-big-div'}>
                        {this.state.nameList.map((item, index) => {
                            return <div key={index}>{
                                (index % 2 === 0) ? <div className={'G-flex G-flex-column P-div-1'}><p>{index} . {item}</p></div> :
                                    <div className={'G-flex G-flex-column P-div-2'}><p>{index+1} . {item + 'sd'}</p></div>
                            }
                            </div>
                        })}
                    </div>


                </div>

            </div>
        </>
    }
}

export default SortName;