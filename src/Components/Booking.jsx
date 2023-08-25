// // App.js
// import React, { useState } from 'react';
// import SalonServiceSelection from './SalonServiceSelection';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// // import './CustomerHomePage.css'; 


// const App = () => {
//     const [selectedServices, setSelectedServices] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [cities, setCities] = useState([
//       'Pune', 'Mumbai', 'Kolhapur' // Add more cities
//     ]);
  
//     const salonData = {
//       'Pune': [
//         { name: 'Salon A', services: ['Haircut', 'Styling', 'Coloring'] },
//         { name: 'Salon B', services: ['Manicure', 'Pedicure', 'Nail Art'] }
//       ],
//       'Mumbai': [
//         { name: 'Salon C', services: ['Haircut', 'Styling'] },
//         { name: 'Salon D', services: ['Manicure', 'Pedicure'] }
//       ],
//       'Kolhapur': [
//           { name: 'Salon E', services: ['Haircut', 'Styling'] },
//           { name: 'Salon F', services: ['Manicure', 'Pedicure','Nail Art'] }
//       ],
//       // Add more salon data for other cities
//     };
  
//     const handleCitySelect = (city) => {
//       setSelectedCity(city);
//       setSelectedServices([]);
//     };
  
//     const handleServiceSelect = (service) => {
//       setSelectedServices((prevSelectedServices) => [...prevSelectedServices, service]);
//     };
  
//     return (
//       <div >
//         {/* className='backImag1' */}
//         <h1>Salon Services by City</h1>
//         <div>
//           {cities.map((city, index) => (
//             <button onClick={() => handleCitySelect(city)}>
//               {city}
//             </button>
//           ))}
//         </div>
//         {selectedCity && (
//           <div>
//             <h2 >Salons in {selectedCity}</h2>
//             {salonData[selectedCity].map((salon, index) => (
//               <div key={index} >
//                 <h3>{salon.name}</h3>
//                 <SalonServiceSelection services={salon.services} onSelectService={handleServiceSelect} />
//               </div>
//             ))}
//           </div>
//         )}
//         <div >
//           <h2 >Selected Services</h2>
//           <ul style={{ listStyle: 'none', padding: '0' }}>
//             {selectedServices.map((service, index) => (
//               <li key={index} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px 20px', color: '#343a40' }}>{service}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
  
//   export default App;







import React, { useState, useEffect } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSalon, setSelectedSalon] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableBarbers, setAvailableBarbers] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isAppointmentConfirmed, setAppointmentConfirmed] = useState(false); // New state


  // Simulated data
  const cities = ['Pune', 'Mumbai', 'Nashik', 'Nagpur'];
  const salons = ['Salon 1', 'Salon 2', 'Salon 3'];
  const services = [
    'Hair Cutting',
    'Shaving',
    'Hair Styling',
    'Facial',
    'Hair Colour',
  ];
  const barbers = {
    'Salon 1': ['Barber A', 'Barber B'],
    'Salon 2': ['Barber C', 'Barber D'],
    'Salon 3': ['Barber E', 'Barber F'],
  };

  const fetchTimeSlots = async () => {
    // Simulated time slots
    const fetchedTimeSlots = ['10:00 AM', '11:00 AM', '2:00 PM'];
    setAvailableTimeSlots(fetchedTimeSlots);
  };

  useEffect(() => {
    if (selectedSalon && selectedDate && selectedBarber) {
      fetchTimeSlots();
    }
  }, [selectedSalon, selectedDate, selectedBarber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Appointment submitted:', {
      selectedCity,
      selectedSalon,
      selectedBarber,
      selectedService,
      selectedDate,
      selectedTimeSlot,
      
    });
    // Simulate appointment confirmation
    // setAppointmentConfirmed(true);
  };

  return (
    
    
    // <div>
    // <div>
    //   {/* ... other form content ... */}
    //   {isAppointmentConfirmed && (
    //     <h1 style={{ color: 'green' }}>Appointment Confirmed Successfully</h1>
    //   )}
    // </div>
  <div>

      
      <div>
      <h1 >ESalon Appointment Booking</h1>
      </div>
      {selectedCity === '' ? (
        
        <div>
          
          <h2>Select a City:</h2>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
            required
          >
            <option value="">Select a City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Book an Appointment</h2>
          <br/>
          <div>
            <label>
              Select Salon:
              <select value={selectedSalon} onChange={(e) => 
               {
                  setSelectedSalon(e.target.value);
                  setSelectedBarber('');
                }}
                required
              >
                <option value="">Select a Salon</option>
                {salons.map((salon, index) => (
                  <option key={index} value={salon}>
                    {salon}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {selectedSalon && (
            <div>
              <label>
                Select Barber:
                <select value={selectedBarber} onChange={(e) => setSelectedBarber(e.target.value)}
                  required
                >
                  <option value="">Select a Barber</option>
                  {barbers[selectedSalon].map((barber, index) => (
                    <option key={index} value={barber}>
                      {barber}
                    </option>
                  ))}
                </select>
              </label>
              <br/>
            </div>
           
          )}
          {selectedSalon && selectedBarber && (
            <div>
              <label>
                Select Service:
                <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                  
                </select>
              </label>
            </div>
          )}
          {selectedSalon && selectedBarber && (
            <div>
              <label>
                Select Date:

                <input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  required
                />
              </label>
              <br/>
            </div>
          )}
          {availableTimeSlots.length > 0 && (
            <div className="time-slots">
              <label>
                Select Time Slot:
                <select value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  required
                >
                  <option value="">Select a Time Slot</option>
                  {availableTimeSlots.map((timeSlot, index) => (
                   <option key={index} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
                  <br/>
                </select>
              </label>
              
            </div>
          )}
          
          {selectedSalon && selectedBarber && selectedService && selectedDate && (
            <Link to="/cBill">
            <button type="submit" >Book Appointment</button>
            </Link>
          )}

        </form>
      )}
    </div>
    
  );
};

export default Booking;
