import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import Product from './components/Product';
import Order from './components/Order';
import MyOrders from './components/MyOrders';
import AdminPage from './components/AdminPage';
import Navbar from './layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routing/PrivateRoute';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
