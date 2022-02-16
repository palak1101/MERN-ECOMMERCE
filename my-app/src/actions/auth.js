import jwt from 'jsonwebtoken';
import axios from 'axios';
import { toast } from 'react-hot-toast';


//Login
export const loginUser = (email, password) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'
        
        const res = await axios.post(`${base_Url}/api/v1/auth/login`, {
            email, password
        })

        const {token, message} = res.data

        if(token){
            toast.success('Login Success')
            // save token to localStorage
            localStorage.setItem('token', token)
            
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token }
            })
        }else{
            toast.error(message)

            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }

    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
    
};



//Signup
export const signupUser = (firstName, lastName, email, password) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'

        const res = await axios.post(`${base_Url}/api/v1/auth/signup`, {
            firstName, lastName, email, password
        })
        // console.log(res.data)

        const { user } = res.data
        if (user) {
            toast.success("Signup Success")
            dispatch({
                type: "SIGNUP_SUCCESS",
                payload: { signup: true }
            })
        } else {
            toast.error("Signup Failed")
            dispatch({
                type: "SIGNUP_FAILED",
                payload: { signup: false }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};