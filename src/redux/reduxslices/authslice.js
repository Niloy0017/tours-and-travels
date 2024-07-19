import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { signup } from "../../api/Authapi"

const initialState = {
    user : null,
    islogin : false
}

export const register = createAsyncThunk(
    'auth/register',
    async function({rejectWithValue},data){
        try{
            const response = await signup(data);
            delete response.password;
            return {...response,...data}
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)

export const authslice = createSlice({
    name : "auth" ,
    initialState ,
    reducers : {
        login : (state,action) => {
            const{ email , password} = action.payload

            if(email == state.user?.email && password == state.user?.password){
                state.islogin = true
                return state
            }
        },
        logout : (state) => {
            state.islogin = false
            state.user = null
        }
    },
    extraReducers : (builder)=> {
        builder.addCase(register.fulfilled,(state,action)=>{
            state.user = action.payload
        })
        builder.addCase(register.rejected,(state)=>{
            state.user = null
        })
    }
})

export default authslice.reducer
export const {login,logout} = authslice.actions

//mount
//app.css index.css
//closure in js
// self calling
//code splitting