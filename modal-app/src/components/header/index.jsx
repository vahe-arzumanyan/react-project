import React from "react";
import './style.scss';
import headerImg from '../../assets/image/simple-house-01.jpg';
import logo from '../../assets/image/simple-house-logo.png';
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    render() {
        return <div className={'G-image-cover G-flex G-align-end P-wrapper '} style={{backgroundImage: `url('${headerImg}')`}}>
            <header className={'G-container'}>
                <div className={'G-flex G-justify-between'}>
                    <div className={'G-flex G-justify-end'}>
                    <span className={'G-image-contain P-wrapper-logo'}
                          style={{backgroundImage: `url('${logo}')`}}></span>
                        <div className={'G-flex G-flex-column P-wrapper-logo-info'}>
                            <p className={'P-wrapper-logo-title'}>Simple House</p>
                            <p className={'P-wrapper-logo-text'}>new restaurant template</p>
                        </div>
                    </div>

                    { /* nav bar list */}
                    <ul className={'G-flex P-header-nav'}>
                        <li>
                            <NavLink to={'/home'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>


            </header>
        </div>

    }
}

export default Header;
