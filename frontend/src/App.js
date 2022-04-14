import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import GenericHome from './components/Home/GenericHome';
import Login from './components/login/Login';
import RegisterForm from './components/registration/register';
import CustomerHome from './components/customer/CustomerHome';

import SingleProduct from './components/customer/SingleProduct';
import ViewCart from './components/customer/ViewCart';
import Home from './components/Admin/Home';
import ShipperDashboard from './components/shipper/ShipperDashboard';
import ShopperDashboard from './components/shopper/ShopperDashboard';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<GenericHome/>}/>
          <Route exact path="/ViewCart" element={<ViewCart></ViewCart>}/>
          <Route exact path="/customerhome" element={<CustomerHome/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<RegisterForm />}/>
          <Route exact path="/adminhome" element={<Home/>}/>
          <Route exact path="/shipper" element={<ShipperDashboard/>}/>
          <Route exact path="/shopper" element={<ShopperDashboard/>}/>
          <Route path="*" element={<div>404</div>}/>
          <Route exact path="/description" element={<SingleProduct/>}/>
        </Routes>
    </Router>
  );
}

export default App;
