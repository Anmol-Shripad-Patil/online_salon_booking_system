// App.js
import React, { useState } from 'react';
import SalonServiceSelection from './SalonServiceSelection';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './CustomerHomePage.css'; 


const App = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([
      'Pune', 'Mumbai', 'Kolhapur' // Add more cities
    ]);
  
    const salonData = {
      'Pune': [
        { name: 'Salon A', services: ['Haircut', 'Styling', 'Coloring'] },
        { name: 'Salon B', services: ['Manicure', 'Pedicure', 'Nail Art'] }
      ],
      'Mumbai': [
        { name: 'Salon C', services: ['Haircut', 'Styling'] },
        { name: 'Salon D', services: ['Manicure', 'Pedicure'] }
      ],
      'Kolhapur': [
          { name: 'Salon E', services: ['Haircut', 'Styling'] },
          { name: 'Salon F', services: ['Manicure', 'Pedicure','Nail Art'] }
      ],
      // Add more salon data for other cities
    };
  
    const handleCitySelect = (city) => {
      setSelectedCity(city);
      setSelectedServices([]);
    };
  
    const handleServiceSelect = (service) => {
      setSelectedServices((prevSelectedServices) => [...prevSelectedServices, service]);
    };
  
    return (
      <div >
        {/* className='backImag1' */}
        <h1>Salon Services by City</h1>
        <div>
          {cities.map((city, index) => (
            <button onClick={() => handleCitySelect(city)}>
              {city}
            </button>
          ))}
        </div>
        {selectedCity && (
          <div>
            <h2 >Salons in {selectedCity}</h2>
            {salonData[selectedCity].map((salon, index) => (
              <div key={index} >
                <h3>{salon.name}</h3>
                <SalonServiceSelection services={salon.services} onSelectService={handleServiceSelect} />
              </div>
            ))}
          </div>
        )}
        <div >
          <h2 >Selected Services</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {selectedServices.map((service, index) => (
              <li key={index} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px 20px', color: '#343a40' }}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default App;
  