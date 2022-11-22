import React from "react";
import './App.scss';
import './index';
import './assets/style/index.scss';


class App extends React.Component {

    static = {
        formaData: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            subject: ''
        },
        errorData: {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            subject: ''
        }
    }
    getClick = () => {
        const {formData, errorData} = this.state
        const newErrorData = {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phone: '',
            subject: ''
        }
        if (!formData.firstName.trim().length) {
            newErrorData.firstName = 'empty first name'
        }
        if (!formData.company.trim().length) {
            newErrorData.company = 'empty compay name'
        }

        if (!formData.email.trim().length) {
            newErrorData.email = 'empty email'
        }

        if (!formData.tell.trim().length) {
            newErrorData.tell = 'empty tell number'
        }
        if (!formData.subject.trim().length) {
            newErrorData.subject = 'empty subject'
        }
    }

    render() {
        return <div className={'G-container'}>
            <div className={'G-flex G-center G-flex-column'}>
                <div className={'G-flex G-center'}>
                    <p>Name</p>
                    <idv>
                        <label>
                            <input type={'text'}
                                   name={'firstName'}
                                   value={formaData.firstName}
                                   onChange={this.onChangeFirstName} />
                        </label>
                    </idv>
                    <div>
                        <label>
                            <input type={'text'} name={'lastName'}
                                   value={formaData.lastName}
                                   onChange={this.onChangeLastName} />
                        </label>
                    </div>

                </div>

                <div className={'G-flex'}>
                    <p>Company</p>
                    <label>
                        <input type={'text'} className={'P-company'}
                               name={'company'}
                               value={formaData.company}
                               onChange={this.onChangeCompany} />
                    </label>
                </div>

                <div className={'G-flex'} name={'email'}>
                    <p>Email</p>
                    <label>
                        <input type={'email'} className={'P-email'}
                               name={'email'}
                               value={formaData.email}
                               onChange={this.onChangeEmail} />
                    </label>
                </div>

                <div className={'G-flex'} name={'phone'}>
                    <p>Phone</p>
                    <label>
                        <input placeholder={'+374'} type={'tell'}
                               name={'tell'}
                               value={formaData.tell}
                               onChange={this.onChangeTell} />
                    </label>

                </div>

                <div className={'G-flex'}
                     name={'sumbject'}
                     value={formaData.subject}
                     onChange={this.onChangeSubject} >
                    <p>Subject</p>
                    <label>
                        <input type={'text'} className={'P-subject'}
                               name={'subject'}
                               value={formaData.subject}
                               onChange={this.onChangeSubject} />
                    </label>
                </div>

                <div>
                    <p>Are you an existing customer?</p>
                    <lebel>
                        <input type={'radio'} className={'P-radio'} name={'radioL'}/>
                    </lebel>
                    <legenl>
                        <input type={'radio'} className={'P-radio'} name={'radioR'}/>
                    </legenl>
                </div>
                <button onClick={this.getClick}>CLick</button>
            </div>
        </div>

    }
}

export default App;
