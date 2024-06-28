import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Storagehandler from "../helper/Storagehandler";

function AltHeadbar() {

    let navigate = useNavigate();
    const email = Storagehandler.getLocalStorage();
    
    function logouthandler(){
        Storagehandler.removeLocalStorage()
        navigate("/");
    }

    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4" style={{ backgroundColor: 'yellow' }}>
  
            <Link to='/about'>
                <button style={{ backgroundColor: 'HotPink' }} >ABOUT</button>
            </Link>
            <Link to='/dashboard'>
                <button style={{ backgroundColor: 'HotPink' }} >DASHBOARD</button>
            </Link>
            <button style={{ backgroundColor: 'HotPink' }}>{email}</button>
            <button style={{ backgroundColor: 'HotPink' }} onClick={logouthandler}>LOGOUT</button>

        </div>
    )
}

export default AltHeadbar;