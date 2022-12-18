import React from "react";
import {useDispatch} from "react-redux";
import './style.scss'
import {toDoActions} from "../../../store/redusers/to-do/type";



const UsersListUi = ({zet, user}) =>{

    const dispatch = useDispatch();
    const deleteList = (index) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload:zet})
    }
    return<div>
        <ul className={'P-userInfo'} onClick={() => deleteList(zet)}>
            <li className={'P-firstName'}>first name_{user.firstName}</li>
            <li className={'P-lastName'}>last name_{user.lastName}</li>
            <li className={'P-email'}>email_{user.email}</li>
            <li className={'P-gender'}>gender_{user.gender}</li>
            <li className={'P-phone'}>phone_{user.phone}</li>
        </ul>
    </div>
}

export default UsersListUi