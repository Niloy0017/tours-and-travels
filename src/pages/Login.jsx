import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Storagehandler from "../helper/Storagehandler";

const Login = ({ formChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    const formValue = () => {
        if (email && password) {

            console.log("login form values are:");
            console.log("email : ", email, "password : ", password);

            navigate('/dashboard', { state: { email } });

            Storagehandler.setLocalStorage(email);


            // setEmail('');
            // setPassword('');
        }
    }

    return (
        <div style={{ backgroundColor: 'aliceblue', gap: '10px' }}
            className="d-flex justify-content-center align-items-center flex-column p-5 w-100 h-100">

            <form style={{ border: '3px solid black', padding: '50px' }}
                className="d-flex flex-column gap-2 justify-content-center align-items-center">

                <div>Login Form</div>

                <div className="d-flex flex-column">
                    <label htmlFor="mail">Email</label>
                    <input name="email" id="mail" type="email" placeholder="enter your email"
                        value={email} onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-column">
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" placeholder="enter your password"
                        value={password} onChange={handleInputChange} />
                </div>

                <button id="btn" style={{ backgroundColor: 'coral' }} type="button" onClick={formValue}>SUBMIT</button>

            </form>


            {/* <button id="logbtn" style={{ backgroundColor: 'coral' }} onClick={formChange}>REGISTER</button> */}

        </div>
    )
}

export default Login;



