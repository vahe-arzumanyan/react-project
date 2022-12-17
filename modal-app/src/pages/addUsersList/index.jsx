import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toDoActions} from '../../store/redusers/to-do/type';
import './style.scss';


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
    }, [toDoList])
    console.log(toDoList)

    const handleClick = () => {
        dispatch({type: toDoActions.CREATE_TO_DO, payload: userInfo})
        setUserInfo({
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            phone: ''
        });
    }

    const deleteList = (index) => {
        dispatch({type: toDoActions.REMOVE_LIST, payload: userInfo})
    }

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }


    return <div className={'G-container'}>
        <div className={'P-add-users'}>
            <label>
                <p>First Name</p>
                <input type='text'  name='firstName' value={userInfo.firstName} onChange={handleChange}/>
            </label>
            <label>
                <p>Last Name</p>
                <input type='text'  name='lastName' value={userInfo.lastName} onChange={handleChange}/>
            </label>
            <label>
                <p>email</p>
                <input type='email' name='email' value={userInfo.email} onChange={handleChange}/>
            </label>
            <label>
                <p>gender</p>
                <select className={'P-gender-option'} name='gender'value={userInfo.gender} onChange={handleChange}>
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                </select>
            </label>
            <label>
                <p>phone number</p>
                <input type='number' placeholder={'+374'} value={userInfo.phone} onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>add users</button>
        </div>
        <ul>
            {toDoList ? toDoList.map((item, index) => {
                return <div key={index} onClick={() => deleteList(index)}>
                    <li>{item.firstName}</li>
                    <li>{item.lastName}</li>
                    <li>{item.email}</li>
                    <li>{item.gender}</li>
                    <li>{item.phone}</li>
                </div>
            }) : null}
        </ul>
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