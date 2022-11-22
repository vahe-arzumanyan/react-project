import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';


class App extends React.Component {

    static = {
        formaData: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: ''
        },
        errorData: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: ''
        }
    }

    render() {
        return <div className={'G-container'}>
            <div className={'G-flex G-center G-flex-column'}>
                <div className={'G-flex G-center'}>
                    <p>Name</p>
                    <label>
                        <input type={'text'}/>
                    </label>
                    <label>
                        <input type={'text'}/>
                    </label>
                </div>

                <div className={'G-flex'}>
                    <p>Company</p>
                    <label>
                        <input type={'text'} className={'P-company'}/>
                    </label>
                </div>

                <div className={'G-flex'}>
                    <p>Email</p>
                    <label>
                        <input type={'email'} className={'P-email'}/>
                    </label>
                </div>

                <div className={'G-flex'}>
                    <p>Phone</p>
                    <label>
                        <input placeholder={'+374'} type={'tell'}/>
                    </label>
                    <label>
                        <input type={'tell'}/>
                    </label>
                </div>

                <div className={'G-flex'}>
                    <p>Subject</p>
                    <label>
                        <input type={'text'} className={'P-subject'}/>
                    </label>
                </div>

                <div>
                    <p>Are you an existing customer?</p>
                    <lebel>
                        <input type={'radio'} className={'P-radio'}/>
                    </lebel>
                    <legenl>
                        <input type={'radio'} className={'P-radio'}/>
                    </legenl>
                </div>
            </div>
        </div>

    }
}

export default App;
