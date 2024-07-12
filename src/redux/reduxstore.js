import { configureStore } from "@reduxjs/toolkit";
import authslice from "./reduxslices/authslice";


const reduxstore = configureStore({
    reducer : {
        auth : authslice
    }
})

export default reduxstore