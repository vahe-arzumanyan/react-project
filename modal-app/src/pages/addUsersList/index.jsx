import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toDoActions} from '../../store/redusers/to-do/type';
import './style.scss';
import UsersListUi from "./UsersListUI";


const AddUsersList = () => {

    const [userInfo, setUserInfo] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            phone: ''
        }
    )

    const dispatch = useDispatch();
    let toDoList = useSelector(state => state.TodoListReducer.toDoList);

    useEffect(() => {
    }, [userInfo])


    const handleClick = () => {

        dispatch({type: toDoActions.CREATE_TO_DO, payload: userInfo})
        setUserInfo({
            ...userInfo,
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            phone: ''
        });
    }

    const deleteList = (index) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload: toDoList})
    }

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }


    return <div className={'G-container'}>
        <div className={'P-add-users'}>
            <label>
                <p>First Name</p>
                <input type='text' name='firstName' value={userInfo.firstName} onChange={handleChange}/>
            </label>
            <label>
                <p>Last Name</p>
                <input type='text' name='lastName' value={userInfo.lastName} onChange={handleChange}/>
            </label>
            <label>
                <p>email</p>
                <input type='email' name='email' value={userInfo.email} onChange={handleChange}/>
            </label>
            <label>
                <p>gender</p>
                <select className={'P-gender-option'} name='gender' value={userInfo.gender} onChange={handleChange}>
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                </select>
            </label>
            <label>
                <p>phone number</p>
                <input type='number' placeholder={'+374'} name='phone' value={userInfo.phone} onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>add users</button>
        </div>
        <div className={'G-flex G-flex-row G-flex-wrap'}>
            {toDoList ? toDoList.map((user, index) => {
                    return <UsersListUi key={index} user={user} onClick={() => deleteList(index)}/>
                })
                : null}
        </div>
    </div>
}

export default AddUsersList;


// {
//     schoolName: '',             //modal
//         address: '',                //modal
//     directorName: '',           //modal
//     directorPhoneNumber: '',    //modal
//     directorEmailAddress: '',   //modal,
//     teachersMaxCount:0,         //modal
//     childrenMaxCount:0,         //modal
//     teachersList: [],
//     childrenList: [],
//     fond: 0,
// }