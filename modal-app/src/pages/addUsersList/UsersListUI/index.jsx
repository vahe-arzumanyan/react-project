import React from "react";
import {useDispatch} from "react-redux";
import './style.scss'
import {toDoActions} from "../../../store/redusers/to-do/type";



const UsersListUi = ({virtualIndex, user}) =>{

    const dispatch = useDispatch();
    const deleteList = (virtualIndex) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload:virtualIndex})
    }
    return<div>
        <ul className={'P-userInfo'}>
            <div>
                <div  onClick={() => editList(virtualIndex)}>X</div>
                <div  onClick={() => deleteList(virtualIndex)}>X</div>
            </div>
            <li className={'P-firstName'}>first name_{user.firstName}</li>
            <li className={'P-lastName'}>last name_{user.lastName}</li>
            <li className={'P-email'}>email_{user.email}</li>
            <li className={'P-gender'}>gender_{user.gender}</li>
            <li className={'P-phone'}>phone_{user.phone}</li>

        </ul>
    </div>
}

export default UsersListUi