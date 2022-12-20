import React, {useState} from "react";
import {useDispatch} from "react-redux";
import './style.scss'
import {toDoActions} from "../../../store/redusers/to-do/type";



const UsersListUi = ({virtualIndex, user, userInfo}) =>{

const [editUserInfo, setEditUserInfo] = useState({});
    const dispatch = useDispatch();
    const deleteList = (virtualIndex) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload:virtualIndex})
    }

    // const editInfo = (user, virtualIndex, userInfo) =>{
    //     setEditUserInfo(virtualIndex)
    //     userInfo({
    //         firstName:user.firstName,
    //         lastName:user.lastName,
    //         email:user.email,
    //         gender:user.gender,
    //         phone:user.phone
    //     })
    // }



    return<div>
        <ul className={'P-userInfo'}>
            <div className={'G-flex G-justify-between'}>
                <div onClick={()=>editInfo(user, virtualIndex)}>edit</div>
                <div  onClick={() => deleteList(virtualIndex)}>x</div>
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