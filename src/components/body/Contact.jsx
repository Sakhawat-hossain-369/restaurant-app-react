import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Alert } from 'reactstrap'
// import { LocalForm, Control, Errors } from 'react-redux-form';
import axios from 'axios';
import { baseUrl } from '../../redux/baseUrl';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: "",
            alertShow: false,
            alertText: null,
            alertType: null,

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        const feedbackData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            telnum: this.state.telnum,
            email: this.state.email,
            agree: this.state.agree,
            contactType: this.state.contactType,
            message: this.state.message,
        };
        axios.post(baseUrl + "feedback", feedbackData)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({

                        alertShow: true,
                        alertText: "Submitted Successfully!",
                        alertType: "success",
                        firstname: "",
                        lastname: "",
                        telnum: "",
                        email: "",
                        agree: false,
                        contactType: "Tel.",
                        message: ""
                    })

                }
            })
            .catch(error => {
                this.setState({
                    alertShow: true,
                    alertText: error.message,
                    alertType: "danger"
                })
                setTimeout(() => {
                    this.setState({
                        alertShow: false
                    })
                }, 5000)
            })

    }
    render() {
        document.title = "Contact"
        return (
            <div className='container'>
                <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>

                    <div className="col-12">
                        <h3>Send us your Feedback.</h3>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>
                            {this.state.alertText}
                        </Alert>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text'
                                        name='firstname'
                                        placeholder='First Name'
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type='text'
                                        name='lastname'
                                        placeholder='Last Name'
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input
                                        type='tel'
                                        name='telnum'
                                        placeholder='Tel. Number'
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type='checkbox'
                                                name='agree'
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>

                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type='select'
                                        name='contactType'
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Tel.
                                        </option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input
                                        type='textarea'
                                        name='message'
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                        rows="12">
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
            //get error so using simple reactsterap 
            // <div className='container'>
            //     <div className='row row-content' style={{ paddingLeft: "20px", textAlign: "left" }}>
            //         <div className="col-12">
            //             <h3>Send us your Feedback.</h3>
            //         </div>
            //         <div className="col-12 col-md-7">
            //             <LocalForm onSubmit={this.handleSubmit}>
            //                 <FormGroup row>
            //                     <Label htmlFor='firstname' md={2}>First Name</Label>
            //                     <Col md={10}>
            //                         <Control.text type='text'
            //                             model='.firstname'
            //                             name='firstname'
            //                             placeholder='First Name'
            //                             className='form-control'
            //                         // value={this.state.firstname}
            //                         // onChange={this.handleInputChange}
            //                         />
            //                     </Col>

            //                 </FormGroup>
            //                 <FormGroup row>
            //                     <Label htmlFor='lastname' md={2}>Last Name</Label>
            //                     <Col md={10}>
            //                         <Control.text
            //                             model='.lastname'
            //                             name='lastname'
            //                             placeholder='Last Name'
            //                             className='form-control'
            //                         // value={this.state.lastname}
            //                         // onChange={this.handleInputChange}
            //                         />
            //                     </Col>

            //                 </FormGroup>
            //                 <FormGroup row>
            //                     <Label htmlFor='telnum' md={2}>Tel. Number</Label>
            //                     <Col md={10}>
            //                         <Control.text
            //                             model='telnum'
            //                             // type='tel'
            //                             name='telnum'
            //                             placeholder='Tel. Number'
            //                             className='form-control'
            //                         // value={this.state.telnum}
            //                         // onChange={this.handleInputChange}
            //                         />
            //                     </Col>

            //                 </FormGroup>
            //                 <FormGroup row>
            //                     <Label htmlFor='email' md={2}>Email</Label>
            //                     <Col md={10}>
            //                         <Control.text
            //                             model='email'
            //                             // type='email'
            //                             name='email'
            //                             placeholder='Email'
            //                             className='form-control'
            //                         // value={this.state.email}
            //                         // onChange={this.handleInputChange}
            //                         />
            //                     </Col>

            //                 </FormGroup>
            //                 <FormGroup row>
            //                     <Col md={{ size: 6, offset: 2 }}>
            //                         <FormGroup check>
            //                             <Label check>
            //                                 <Control.checkbox
            //                                     model='.agree'
            //                                     // type='checkbox'
            //                                     name='agree'
            //                                     className='form-check-input'
            //                                 // checked={this.state.agree}
            //                                 // onChange={this.handleInputChange}
            //                                 />
            //                                 <strong>May we contact you?</strong>
            //                             </Label>

            //                         </FormGroup>
            //                     </Col>
            //                     <Col md={{ size: 3, offset: 1 }}>
            //                         <Control.select
            //                             model='contactType'
            //                             // type='select'
            //                             name='contactType'
            //                             className='form-control'
            //                         // value={this.state.contactType}
            //                         // onChange={this.handleInputChange}
            //                         >
            //                             <option>Tel.
            //                             </option>
            //                             <option>Email</option>
            //                         </Control.select>
            //                     </Col>
            //                 </FormGroup>
            //                 <FormGroup row>
            //                     <Label htmlFor='message' md={2}>Your Feedback</Label>
            //                     <Col md={10}>
            //                         <Control.textarea
            //                             model='.message'
            //                             // type='textarea'
            //                             name='message'
            //                             // value={this.state.message}
            //                             // onChange={this.handleInputChange}
            //                             rows="12"
            //                             className='form-control'
            //                         />

            //                     </Col>
            //                 </FormGroup>
            //                 <FormGroup>
            //                     <Col md={{ size: 10, offset: 2 }}>
            //                         <Button type='submit' color='primary'>Send Feedback</Button>
            //                     </Col>
            //                 </FormGroup>
            //             </LocalForm>
            //         </div>

            //     </div>
            // </div>
        )
    }
}
