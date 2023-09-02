import { useState } from "react";

function RevenueGeneration() {
  const [selectedOption, setSelectedOption] = useState("");
  const [city, setCity] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOptionChangeCity = (e) => {
    setCity(e.target.value);
  };

  const [fcities, setfCities] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [salon, setSalon] = useState([]);

  const getallcities = () => {
    fetch("http://localhost:8080/getallcities/" + city)
      .then((resp) => resp.text())
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        setfCities(obj);
      });
  };

  const getDetails = () => {
    if (selectedOption === "Salon") {
      fetch("http://localhost:8080/getallforcustomer/" + city)
        .then((resp) => resp.text())
        .then((text) => (text.length ? JSON.parse(text) : {}))
        .then((obj) => {
          setCustomer(obj);
        });
    } else if (selectedOption === "Customer") {
      fetch("http://localhost:8080/getallforsalons/"+city)
        .then((resp) => resp.text())
        .then((text) => (text.length ? JSON.parse(text) : {}))
        .then((obj) => {
          setSalon(obj);
        });
    }
  };

  return (
    <div>
      <select
        className="form-select"
        value={selectedOption}
        onChange={(e) => {
          handleOptionChange(e);
          getallcities();
        }}
        required
      >
        <option value="Salon">Salon</option>
        <option value="Customer">Customer</option>
      </select>

      {selectedOption && (
        <select
          className="form-select mb-3"
          value={city}
          onChange={handleOptionChangeCity}
          required
        >
          <option value="">Select a City</option>
          {fcities.map((city) => {
            return (
              <option key={city.city_id} value={city.city_id}>
                {city.city}
              </option>
            );
          })}
        </select>
      )}

      {selectedOption && city && <button className="btn btn-primary" onClick={getDetails}>Generate Report</button>}

      {customer && 
              <table>
              <thead>
                {/* <tr>
                  <th>Customer</th>
                  <th>Salon Name</th>
                  <th>Barbers</th>
                  <th>Services</th>
                  <th>Time Slot</th>
                  <th>Price</th>
                </tr> */}
              </thead>
              <tbody>
                {/* {customer.map(customers => (
                  <tr key={customers}>
                    <td>{customers.customer.first_name}{" "}{customers.customer.last_name}</td>
                    <td>{customers.barber.salon_id.salon_name}</td>
                    <td>{customers.barber.barber_name}</td>
                    <td>{customers.servic.serviceName}</td>
                    <td>{" "}{customers.slot.start_time}</td>
                    <td  onchange={sum(customers.servic.price)}>{"₹"}{customers.servic.price}</td>
                    <td>
                      <button onClick={() => handleCancel()}>Cancel</button>
                    </td>
                  </tr>
                ))} */}
              </tbody>
             
              </table>
              
              

      }

      { salon && 
          <table>
          <thead>
            {/* <tr>
              <th>Customer</th>
              <th>Salon Name</th>
              <th>Barbers</th>
              <th>Services</th>
              <th>Time Slot</th>
              <th>Price</th>
            </tr> */}
          </thead>
          <tbody>
            {/* {salon.map(salons => (
              <tr key={customers}>
                <td>{customers.customer.first_name}{" "}{customers.customer.last_name}</td>
                <td>{customers.barber.salon_id.salon_name}</td>
                <td>{customers.barber.barber_name}</td>
                <td>{customers.servic.serviceName}</td>
                <td>{" "}{customers.slot.start_time}</td>
                <td  onchange={sum(customers.servic.price)}>{"₹"}{customers.servic.price}</td>
                <td>
                  <button onClick={() => handleCancel()}>Cancel</button>
                </td>
              </tr>
            ))} */}
          </tbody>
         
          </table>
      }
    </div>
  );
}

export default RevenueGeneration;
