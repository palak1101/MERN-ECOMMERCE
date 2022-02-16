import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import Product from './components/Product/Product';
import Order from './components/Order';
import MyOrders from './components/MyOrders';
import AdminPage from './components/admin/AdminPage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import PrivateRoute from './routing/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Toaster} from 'react-hot-toast';

const App = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // dispatch an action that modifies the store
      console.log(token)
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: { token }
      })
    }

  }, [])


  return (
    <div className="App">
      <div><Toaster /></div>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/adminpage' element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
