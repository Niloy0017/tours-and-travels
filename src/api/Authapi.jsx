import React from 'react'
import apihandler from '../helper/apihandler'
import { API_BASE_URL } from '../constants/Appconstants'

export const signup = async (data) => {

    const options = {
        header : {
            'Content-Type' : 'application/json'
        }
    }

    try{
        let response = await apihandler.post(`${API_BASE_URL}/register`,data,options);
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }

}
