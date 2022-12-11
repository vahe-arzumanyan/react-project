import React from "react";
import './style.scss';

const AddUsersList = () => {
    return <div className={'G-container'}>
        <div className={'P-add-users'}>
            <label>
                <p>First Name</p>
                <input type='text'/>
            </label>
            <label>
                <p>Last Name</p>
                <input type='text'/>
            </label>
            <label>
                <p>email Name</p>
                <input type='text'/>
            </label>
            <label>
                <p>gender</p>
               <select className={'P-gender-option'}>
                   <option>male</option>
                   <option>female</option>
                   <option>other</option>
               </select>
            </label>
            <label>
                <p>phone number</p>
                <input type='number' placeholder={'+374'}/>
            </label>
<button>add users</button>
        </div>

    </div>
}

export default AddUsersList;