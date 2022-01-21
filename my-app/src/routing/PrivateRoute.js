import { useSelector } from "react-redux";
import { Navigate } from "react-router";


const PrivateRoute = ({child}) => {
    const auth = useSelector(state => state.auth)
    // console.log(auth)
    return auth.token === null ? child : <Navigate to='/' />
};

export default PrivateRoute;
