import React from "react";
import { Link } from "react-router-dom";

function Headbar() {
    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4" style={{ backgroundColor: 'yellow' }}>

            <Link to='/' style={{ backgroundColor: 'HotPink' }}>
                <button style={{ backgroundColor: 'HotPink' }} >REGISTER</button>
            </Link>
            <Link to='/login'>
                <button style={{ backgroundColor: 'HotPink' }} >LOGIN</button>
            </Link>
            <Link to='/about'>
                <button style={{ backgroundColor: 'HotPink' }} >ABOUT</button>
            </Link>
            <Link to='/register'>
                <button style={{ backgroundColor: 'HotPink' }} >REGISTER</button>
            </Link>

        </div>
    )
}

export default Headbar;







