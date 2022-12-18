import React from "react";
import './style.scss'


const UsersListUi = ({user}) =>{
    return<div>
        <ul className={'P-userInfo'}>
            <li className={'P-firstName'}>first name_{user.firstName}</li>
            <li className={'P-lastName'}>last name_{user.lastName}</li>
            <li className={'P-email'}>email_{user.email}</li>
            <li className={'P-gender'}>gender_{user.gender}</li>
            <li className={'P-phone'}>phone_{user.phone}</li>
        </ul>
    </div>
}

export default UsersListUi