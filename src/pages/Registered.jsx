import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            submitted: false
        };
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formValue = (event) => {
        event.preventDefault();
        const { firstname, lastname, email, phone } = this.state;

        if (email && phone && firstname && lastname) {
            console.log("register form values are:");
            console.log("firstname: ", firstname, "lastname: ", lastname, "email : ", email, "phone : ", phone);

            // Reset form fields
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                submitted: true
            });
        }
    }

    render() {
        const { firstname, lastname, email, phone, submitted } = this.state;

        // Conditional rendering based on redirectToLogin
        return (
            <div style={{
                backgroundColor: 'aliceblue', display: 'flex', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', gap: '10px',
                width: '100%', padding: '50px', height: '100%'
            }}>
                <form style={{
                    display: 'flex', flexDirection: 'column', gap: '10px',
                    justifyContent: 'center', alignItems: 'center', border: '3px solid black', padding: '50px'
                }}>
                    <div>All Students Table</div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="firstnam">First Name</label>
                        <input name="firstname" id="firstnam" placeholder="enter your first name"
                            value={firstname} onChange={this.handleInputChange} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="secondnam">Last Name</label>
                        <input name="lastname" id="secondnam" placeholder="enter your last name"
                            value={lastname} onChange={this.handleInputChange} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="mail">Email</label>
                        <input name="email" id="mail" type="email" placeholder="enter your email"
                            value={email} onChange={this.handleInputChange} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="phone">Phone</label>
                        <input name="phone" id="phone" type="number" placeholder="enter your phone"
                            value={phone} onChange={this.handleInputChange} />
                    </div>

                    <button id="btn" style={{ backgroundColor: 'coral' }} onClick={this.formValue}>SUBMIT</button>

                    {submitted && (
                        <div>
                            <p>Registration successful! Proceed to login:</p>
                            <Link to="/login">GO TO LOGIN</Link>
                        </div>
                    )}
                </form>

            </div>
        )
    }
}

export default Register;