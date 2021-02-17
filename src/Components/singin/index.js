import React, { Component } from 'react';
import FormFields from '../ui/formFields';
import { firebase } from '../../firebase'
import { validate } from '../ui/misc';
class SingIn extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            },

            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: ''
            },
        }
    }

    updatedForm(element) {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }

        newElement.value = element.event.target.value;


        let valiDate = validate(newElement)

        newElement.valid = valiDate[0];

        newElement.validationMessage = valiDate[1]


        newFormdata[element.id] = newElement

        this.setState({
            formdata: newFormdata,
            formError: false
        })
    }

    submitForm(event) {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        if (formIsValid) {
            firebase.auth()
                .signInWithEmailAndPassword(
                    dataToSubmit.email,
                    dataToSubmit.password
                ).then(() => {
                   this.props.history.push('/dashbord')

                }).catch(error => {
                    this.setState({
                        formError: true
                    })
                })

        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{ margin: '100px' }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <h2>Please Login</h2>

                        <FormFields

                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updatedForm(element)}

                        />



                        <FormFields

                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updatedForm(element)}

                        />


                        {this.state.formError ?
                            <div className='error_label'>Something is wrong try agin</div>
                            : null
                        }

                        <button onClick={(event) => this.submitForm(event)}>Log In</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default SingIn