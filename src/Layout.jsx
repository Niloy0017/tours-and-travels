import { Outlet, useNavigate } from "react-router-dom"
import AltHeadbar from "./navbars/AltHeadbar"
import Headbar from "./navbars/Headbar"
import Storagehandler from "./helper/Storagehandler"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { logout } from "./redux/reduxslices/authslice"


const Layout = () => {

    const isloginSelector = useSelector(state => state.auth.islogin);
    const [user,setUser] = useState(Storagehandler.getLocalStorage());

    useEffect(() => {
        console.log("islogin : ", isloginSelector);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uselessHandler = () => {
        console.log("oproyojonio function");
        setUser(Storagehandler.getLocalStorage());
    };

    const logoutHandler = () => {
        dispatch(logout());
        Storagehandler.removeLocalStorage();
        setUser(Storagehandler.getLocalStorage());
        navigate("/register");
    };

    return (<>
        <div className="wrapper">
            <div>
                {
                    user ? <AltHeadbar logoutHandler={logoutHandler} /> : <Headbar />
                }
            </div>
            <div className="patro">
                <Outlet context={{ uselessHandler }} ></Outlet>
            </div>
        </div>
    </>)
}

export default Layout



