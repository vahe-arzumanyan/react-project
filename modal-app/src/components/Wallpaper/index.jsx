import React from "react";
import './style.scss';
import wrapper from '../../assets/image/simple-house-01.jpg';
import logo from '../../assets/image/simple-house-logo.png';


class Wallpaper extends React.Component {
    render() {
        return <div className={'G-image-cover P-wrapper'} style={{backgroundImage: `url('${wrapper}')`}}>
                <div className={'G-flex G-flex-row G-align-center hh'}>
                    <span className={'G-image-contain P-wrapper-logo'} style={{backgroundImage: `url('${logo}')`}}></span>
                    <div className={'G-flex G-flex-column P-wrapper-logo-info'}>
                        <p className={'P-wrapper-logo-title'}>Simple House</p>
                        <p className={'P-wrapper-logo-text'}>new restaurant template</p>
                    </div>
                </div>
            </div>

    }
}

export default Wallpaper;