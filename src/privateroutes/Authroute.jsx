import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Storagehandler from '../helper/Storagehandler'

export const Authroute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        let user = Storagehandler.getLocalStorage();

        if (!user) {
            navigate("/login")
        }
    })

    return (
        <div>{children}</div>
    )
}



