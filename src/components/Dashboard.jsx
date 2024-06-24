import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const { email } = location.state || {}; // Destructuring email from location.state, providing default empty object

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



