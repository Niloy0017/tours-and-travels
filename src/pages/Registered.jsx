import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/reduxslices/authslice";


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            submitted: false
        };
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    formOnSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, email, password } = this.state;

        if (email && password && firstname && lastname) 
        {
            const newUser = {
                firstName: firstname,
                lastName: lastname,
                password: password,
                email: email,
            }

            this.props.register(newUser);

            console.log("register form values are:");
            console.log("firstname: ", firstname, "lastname: ", lastname, "email : ", email, "password : ", password);

            // Reset form fields
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                submitted: true
            });
        }

    }

    render() {
        const { firstname, lastname, email, password, submitted } = this.state;

        return (
            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', gap: '10px',
                width: '100%', padding: '50px', height: '100%'
            }}>
                { this.props.user && <Navigate to="/login"/> }

                <form style={{
                    display: 'flex', flexDirection: 'column', gap: '10px',
                    justifyContent: 'center', alignItems: 'center', border: '3px solid black', padding: '50px'
                }}>
                    <div>Registration Form</div>

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
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="number" placeholder="enter your phone"
                            value={password} onChange={this.handleInputChange} />
                    </div>

                    <button id="btn" style={{ backgroundColor: 'coral' }} onClick={this.formOnSubmit}>SUBMIT</button>

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

const mapStateToProps = (state) => (
    {
        user: state.auth.user,
    }
)

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;