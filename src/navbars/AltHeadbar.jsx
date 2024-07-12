import React from "react";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

function AltHeadbar({logoutHandler}) {

    // const isloginSelector = useSelector(state => state.auth.islogin); //state is any variable , can use instead eg-abc , abc=>abc.auth.islogin

    const isuserSelector = useSelector(state => state.auth.user);
    const email = isuserSelector?.email;

    return (
        <div className=" d-flex gap-5  justify-content-center pt-4 pb-4 navbar" >
  
            <Link to='/about'>
                <button> ABOUT </button>
            </Link>
            <Link to='/dashboard'>
                <button> DASHBOARD </button>
            </Link>
            <Link to='/tours'>
                <button> TOURS </button>
            </Link>
            <button> {email} </button>
            <button onClick={logoutHandler}> LOGOUT </button>

        </div>
    )
}

export default AltHeadbar;



