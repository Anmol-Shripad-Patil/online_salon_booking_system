//import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import HomePage from './Components/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerHomePage from './Components/CustomerHomePage';
import CustomerSignupPage from './Components/CustomerSignupPage';
import LoginPage from './Components/LoginPage';
import SalonHomePage from './Components/SalonHomePage';
import SalonSignupPage from './Components/SalonSignupPage';
import CenteredSignup from './Components/CenteredSignup';
import AdminHomePage from './Components/AdminHomePage';

import CustomerAppointment from './Components/CustomerAppointment';
import Cprofile from './Components/Cprofile';
import CustomerBill from './Components/CustomerBill';
import Booking from './Components/Booking';
import ManageSalonProfile from './Components/SalonProfileManagement';
import ManageBarbers from './Components/ManageBarbers';
import SalonProfileManagement from './Components/SalonProfileManagement';
import { useSelector } from 'react-redux';

function App() {

//  const mystate = useSelector((state)=> state.logged);   // this logged from reduxcomponent store

   const mystate=useSelector((state)=> state.logged);

  return (
    <div className="App">
      <div style={{display: mystate.loggedIn?"none":"block"}}>
         {/* <HomePage/>  */}
         <nav className="navbar navbar-expand-sm bg-light mb-2">  
          {/* it diaplay header bare link in single line */}
          <div className="content-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='#' className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to='/centereds' className="nav-link">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
          </ul>
         </div>
       </nav>
       </div>



         <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="aHome" element={<AdminHomePage/>}/>
                <Route path="signupC" element={<CustomerSignupPage/>}/>
                <Route path="signupS" element={<SalonSignupPage/>}/>
                <Route path="centereds" element={<CenteredSignup/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="cHome" element={<CustomerHomePage/>}/>
                <Route path="service" element={<Booking/>}/>
                <Route path="cAppoint" element={<CustomerAppointment/>}/>
                <Route path="cProfile" element={<Cprofile/>}/>
                <Route path="cBill" element={<CustomerBill/>}/>
                <Route path="sProfile" element={<ManageSalonProfile/>}/>
                <Route path="sHome" element={<SalonHomePage/>}/>
                <Route path="mBarbers" element={<ManageBarbers/>}/>
                <Route path="salonprofilemanagement" element={<SalonProfileManagement/>}/>
                

                ManageSalonProfile
                

        </Routes>
        {/* <CustomerHomePage/>
         <SalonHomePage/>
         <AdminHomePage/>   */}

    </div>
  );
}

export default App;
