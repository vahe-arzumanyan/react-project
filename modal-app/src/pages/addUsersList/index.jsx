import React from "react";
import './style.scss';

const AddUsersList = () => {
    return <div className={'G-contaienr'}>
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
                <input type='text'/>
            </label>
            <label>
                <p>phone number</p>
                <input type='text'/>
            </label>

        </div>

    </div>
}

export default AddUsersList;