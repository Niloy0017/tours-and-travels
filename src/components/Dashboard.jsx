import React, { useEffect, useState } from 'react';
import Storagehandler from "../helper/Storagehandler";

const Dashboard = () => {

    // const location = useLocation();
    // const { email } = location.state || {}; // Destructuring email from location.state, providing default empty object

    const [email,setEmail] = useState();
    const emaildata = Storagehandler.getLocalStorage();

    useEffect(()=>{
        setEmail(emaildata);
    },[])

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            {email ? (
                <div style={{ fontSize: '1.5rem' }}>Email: {email}</div>
            ) : (
                <div style={{ fontSize: '1.5rem' }}>Dashboard</div>
            )}
        </div>
    );
}

export default Dashboard;



