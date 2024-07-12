import React from "react";
import { Link } from "react-router-dom";

function Headbar() {
    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4 navbar" >

            <Link to='/'>
                <button> REGISTER </button>
            </Link>
            <Link to='/login'>
                <button> LOGIN </button>
            </Link>
            <Link to='/about'>
                <button> ABOUT </button>
            </Link>
        
        </div>
    )
}

export default Headbar;







