import jwt from 'jsonwebtoken';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export const addCategory = (name, description) => async (dispatch) => {

    try {
        const base_Url = 'https://palak-ecommerce-api.herokuapp.com'
        
        const res = await axios.post(`${base_Url}/api/v1/category/add`, {
            name, description
        })

        const {category, message} = res.data

        if(category){
            toast.success(message)

            dispatch({
                type: "ADD_CATEGORY"
            })
        }else{
            toast.error(message)

            dispatch({
                type: "ADD_CATEGORY_FAILED"
            })
        }

    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
    
};
