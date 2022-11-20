import React from "react";
import './style.scss';


class FoodBoxList extends React.Component {
    render() {
        return <div className={'P-food-box'}>
            <div className={'P-food-info'}>
                <div className={'G-image-cover P-food-image'} style={{backgroundImage: `url('${this.props.box.img}')`}}
                     alt={this.props.box.alt}/>
                <h3 className={'P-food-title'}>{this.props.box.header}</h3>
                <p className={'P-food-text'}>{this.props.box.description}</p>
                <p className={'P-food-price'}>{this.props.box.price}</p>
            </div>

        </div>
    }
}

export default FoodBoxList;