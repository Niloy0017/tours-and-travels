import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Storagehandler from "../helper/Storagehandler";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reduxslices/authslice";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { uselessHandler } = useOutletContext();

    const dispatch = useDispatch();
    const isloginSelector = useSelector(state => state.auth.islogin);

    useEffect(() => {
        if (isloginSelector)
        {
            console.log("isloginSelector in if ", isloginSelector);
            Storagehandler.setLocalStorage(email);
            uselessHandler();
            navigate('/tours');
        }
    }, [isloginSelector]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    const formOnSubmit = (e) => {
        e.preventDefault();

        if (email && password) 
        {
            console.log("login form values are:");
            console.log("email : ", email, "password : ", password);

            const dispatcher = dispatch(login({ email, password }));
            console.log("dispatcher ", dispatcher);

            console.log("isloginSelector on formsubmit ", isloginSelector);
        }
    }

    return (
        <div style={{ gap: '10px' }}
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

                <button id="btn" style={{ backgroundColor: 'coral' }} type="button" onClick={formOnSubmit}>SUBMIT</button>

            </form>

        </div>
    )
}

export default Login;

