import React from "react";
import { Link } from "react-router-dom";

function AltHeadbar() {
    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4" style={{ backgroundColor: 'yellow' }}>
  
            <Link to='/about'>
                <button style={{ backgroundColor: 'HotPink' }} >ABOUT</button>
            </Link>
            <Link to='/dashboard'>
                <button style={{ backgroundColor: 'HotPink' }} >DASHBOARD</button>
            </Link>
            <button style={{ backgroundColor: 'HotPink' }} >LOGOUT</button>

        </div>
    )
}

export default AltHeadbar;