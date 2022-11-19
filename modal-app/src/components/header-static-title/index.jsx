import React from "react";
import './style.scss'

class StaticTitile extends React.Component{
    render() {
    return <section>
        <div className='G-container'>
            <div className={'P-title-info G-flex G-flex-column G-center'}>
                <h3 className={'P-static-title'}>{this.props.title} </h3>
                <p className={'P-static-text'}>{this.props.description}</p>
            </div>
        </div>
    </section>
    }
}

export default StaticTitile;