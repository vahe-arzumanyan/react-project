import React from "react";
import './style.scss'


const UsersListUi = () =>{
    return<div>
        <ul>
            <li className={'P-firstName'}>{item.firstName}</li>
            <li className={'P-lastName'}>{item.lastName}</li>
            <li className={'P-email'}>{item.email}</li>
            <li className={'P-gender'}>{item.gender}</li>
            <li className={'P-phone'}>{item.phone}</li>
        </ul>
    </div>
}

export default UsersListUi