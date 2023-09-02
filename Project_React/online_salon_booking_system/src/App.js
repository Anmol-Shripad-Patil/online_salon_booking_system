//import logo from './logo.svg';
import './App.css';

import HomePage from './Components/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerHomePage from './Components/CustomerHomePage';
import CustomerSignupPage from './Components/CustomerSignupPage';
import LoginPage from './Components/LoginPage';
import SalonHomePage from './Components/SalonHomePage';
import SalonSignupPage from './Components/SalonSignupPage';
import CenteredSignup from './Components/CenteredSignup';
import AdminHomePage from './Components/AdminHomePage';
import ManageBarbers from './Components/ManageBarbers';
import AppointmentCalendar from './Components/AppointmentCalender';
import ManageSalonProfile from './Components/SalonProfileManagement';
import Cprofile from './Components/Cprofile'
 import CustomerAppointment from './Components/CustomerAppointment'
 import { Link } from 'react-router-dom';
 import { useSelector} from 'react-redux';
 import LogoutComponent from './Components/LogoutComponent'

import ServiceMenu from './Components/ServiceMenu'
import Booking from './Components/Booking';
import CustomerBill from './Components/CustomerBill'
import SalonProfileManagement from './Components/SalonProfileManagement'
import RevenueGeneration from './Components/RevenueGeneration'

function App() {

  const mystate=useSelector((state)=> state.logged);

  return (
    <div className="App App-header">
      
        
      <div className="container-fluid bg-image App-header" >
      <div style={{display: mystate.loggedIn?"none":"block"}} class="p-3 mb-2 bg-dark text-white"> 
         <nav className="navbar navbar-expand-sm nanbar-dark mb-2 ">  
          <div >
          <ul className="navbar-nav " >
            <li className="nav-item">
              <Link to='/' className='nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'  >
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to='#' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                About Us
                </Link>
            </li>
            <li className="nav-item">
              <Link to='/centereds' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                SignUp
                </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                Login</Link>
            </li>
          </ul>
         </div>
       </nav>
       </div>



       {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

         {/* <HomePage/>  */}
         
         <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="signupC" element={<CustomerSignupPage/>}/>
                <Route path="signupS" element={<SalonSignupPage/>}/>
                <Route path="centereds" element={<CenteredSignup/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="salonhome" element={<SalonHomePage/>}/>
                <Route path="mBarbers" element={<ManageBarbers/>}/>
                <Route path="appointmentcalender" element={<AppointmentCalendar/>}/>
                <Route path="sProfile" element={<ManageSalonProfile/>}/>
                <Route path="CustomerHomePage" element={<CustomerHomePage/>}/>
                <Route path="SalonHomePage" element={<SalonHomePage/>}/>
                <Route path="cAppoint" element={<CustomerAppointment/>}/> 
                <Route path="cProfile" element={<Cprofile/>}/> 
                <Route path="service" element={<Booking/>}/>
                <Route path="cBill"  element={<CustomerBill/>}/>
                <Route path="cBill" element={<CustomerBill/>}/>
                <Route path="salonprofilemanagement" element={<SalonProfileManagement/>}/>
                <Route path="adminHomePage" element={<AdminHomePage/>}/>
                <Route path="logout" element={<LogoutComponent/>}/>
                <Route path="revenuegeneration" element={<RevenueGeneration/>}/>
        </Routes>
        {/* <CustomerHomePage/>
         <SalonHomePage/>
         <AdminHomePage/>   */}
      
      </div>
    </div>
  );
}

export default App;
