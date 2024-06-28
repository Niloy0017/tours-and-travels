import { Outlet } from "react-router-dom"
import AltHeadbar from "../components/AltHeadbar"
import Headbar from "../components/Headbar"
import Storagehandler from "../helper/Storagehandler"


const Layout=()=>{

    let user = Storagehandler.getLocalStorage();
    
    return(<>
    {
        user ? <AltHeadbar></AltHeadbar> : <Headbar></Headbar>
    }
        <Outlet></Outlet>
    </>)
}

export default Layout