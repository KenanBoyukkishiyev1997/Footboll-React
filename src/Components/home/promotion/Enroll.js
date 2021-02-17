import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import FormFields from '../../ui/formFields'
import { validate } from '../../ui/misc';
import { firabasePromotions } from '../../../firebase'
export default class Enroll extends Component {

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
            }
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


    resetFormSuccsess(type) {
        const newFormdata = { ...this.state.formdata }

        for (let key in newFormdata) {
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }

        this.setState({
            formError: false,
            formdata: newFormdata,
            formSuccess: type ? 'Congratulations' : 'Alredy in database'
        });
        this.successMessage();
    }

    successMessage() {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000)
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
            firabasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
                .then((snapshot) => {
                    if (snapshot.val() === null) {
                        firabasePromotions.push(dataToSubmit)
                        this.resetFormSuccsess(true)
                    } else {
                        this.resetFormSuccsess(false)
                    }

                })
            // console.log(dataToSubmit)
            // this.resetFormSuccsess()

        } else {
            this.setState({
                formError: true
            })
        }
    }


    render() {
        return (
            <Fade>
                <div className='enroll_wrapper'>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>

                        <div className='enroll_input'>
                            <FormFields

                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updatedForm(element)}

                            />

                            {this.state.formError ?
                                <div className='error_label'>Something is wrong try agin</div>
                                : null
                            }

                            <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event) => this.submitForm(event)}>Enroll</button>
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}
