import React from "react";
import './style.scss';
import {NavLink, Route, Routes} from 'react-router-dom';
import School from "../../pages/school";
import Teacher from "../../pages/teachers";
import Pupil from "../../pages/pupils";

const SchoolCategory = () => {
    return <div className={'P-school-action-title G-flex G-flex-column G-align-center'}>
        <div className={'P-admin-action-title G-flex G-center'}>
            <p>Administration Action</p>
        </div>
        <ul>
            <li>
                <NavLink to={'/School'}><a>Schools</a></NavLink>
            </li>
            <li>
                <NavLink to={'/Teacher'}><a>Teachers</a></NavLink>
            </li>
            <li>
                <NavLink to={'Pupil'}><a>Pupils</a></NavLink>
            </li>
        </ul>


    </div>
}

export default SchoolCategory;