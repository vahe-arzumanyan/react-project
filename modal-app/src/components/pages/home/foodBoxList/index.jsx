import React from "react";
import './style.scss';

class FoodBoxList extends React.Component{
    render() {
        return <div>
          <img className={'P-food-image'} src={this.props.box.img} alt={this.props.box.alt}/>
          <h3 className={'P-food-title'}>{this.props.box.header}</h3>
            <p className={'P-food-info'}>{this.props.box.description}</p>
        </div>

    }
}

export default FoodBoxList;