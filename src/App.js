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
import ServiceMenu from './Components/ServiceMenu';
import CustomerAppointment from './Components/CustomerAppointment';
import Cprofile from './Components/Cprofile';

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
                <Route path="signupC" element={<CustomerSignupPage/>}/>
                <Route path="signupS" element={<SalonSignupPage/>}/>
                <Route path="centereds" element={<CenteredSignup/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="cHome" element={<CustomerHomePage/>}/>
                <Route path="service" element={<ServiceMenu/>}/>
                <Route path="cAppoint" element={<CustomerAppointment/>}/>
                <Route path="cProfile" element={<Cprofile/>}/>

        </Routes>
        {/* <CustomerHomePage/>
         <SalonHomePage/>
         <AdminHomePage/>   */}

      </header>
    </div>
  );
}

export default App;
