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
import ServiceMenu from './Components/Booking';
import CustomerAppointment from './Components/CustomerAppointment';
import Cprofile from './Components/Cprofile';
import CustomerBill from './Components/CustomerBill';
import Booking from './Components/Booking';
import ManageSalonProfile from './Components/SalonProfileManagement';
import ManageBarbers from './Components/ManageBarbers';
import SalonProfileManagement from './Components/SalonProfileManagement';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      </header>
    </div>
  );
}

export default App;
