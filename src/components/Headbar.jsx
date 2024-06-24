import React from "react";
import { Link } from "react-router-dom";

function Headbar({ formChange }) {
    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4" style={{ backgroundColor: 'yellow' }}>

            {/* <button id="logbtn" style={{ backgroundColor: 'HotPink' }} onClick={formChange}>LOGIN</button>
            <button id="logbtn" style={{ backgroundColor: 'HotPink' }} onClick={formChange}>REGISTER</button> */}

            <Link to='/' style={{ backgroundColor: 'HotPink' }}>
                <button style={{ backgroundColor: 'HotPink' }} >REGISTER</button>
            </Link>
            <Link to='/login'>
                <button style={{ backgroundColor: 'HotPink' }} >LOGIN</button>
            </Link>
            <Link to='/about'>
                <button style={{ backgroundColor: 'HotPink' }} >ABOUT</button>
            </Link>
            {/* <Link to='/dashboard'>
                <button style={{ backgroundColor: 'HotPink' }} >DASHBOARD</button>
            </Link> */}
            <Link to='/register'>
                <button style={{ backgroundColor: 'HotPink' }} >REGISTER</button>
            </Link>

        </div>
    )
}

export default Headbar;







