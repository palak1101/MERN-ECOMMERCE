import jwt from 'jsonwebtoken';
import {toast} from 'react-hot-toast';

export const loginUser = (email, password) => {
    //Verify EMAIL and PASSWORD
    
    //Create and Sign a jwt
    const users =JSON.parse(localStorage.getItem('users'))
    const user = users.find(u => u.email === email)

    if(user.email === email && user.password === password){
        const token = jwt.sign({ email: user.email }, 'SECRET')
        toast.success("Login Success")

        return {
            type:"LOGIN_SUCCESS",
            payload:{token}
        }
    }else{
        return {
            type:"LOGIN_FAILED",
            payload:{token: null}
        }
    }
}

