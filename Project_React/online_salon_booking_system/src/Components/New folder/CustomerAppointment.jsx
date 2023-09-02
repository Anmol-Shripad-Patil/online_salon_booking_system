import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const CustomerAppointment = () => {

// initialState={
//   service_id:'',
//   customer_id:'',
// }

  const bookingobj=JSON.parse(localStorage.getItem("loginbookingOBJ")).customer_id;
  const datebook=(JSON.parse(localStorage.getItem("loginbookingOBJ")).selectedDate).substr(0,10);
  // const[customerin,setCustomerName]=useState([]);

  // const[servicename,setServiceName]=useState([]);

  // const [state, dispatch] = useReducer(reducer,initialState);
  // const reducer = (state,action) =>{
  //   switch (action.type){
  //     case 'SET_CUS':
  //       return {...state,customer_id:action.payload}
  //     case 'SET_SER':
  //       return {...state,service_id:action.payload}
  //   }
  // }


const[Customers,setCustomerOBJ]=useState([]);
  useEffect(()=>{
   
    fetch("http://localhost:8080/getCustomersforBooking/"+bookingobj)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj=> {
    localStorage.setItem("logincustomers",JSON.stringify(obj))
    setCustomerOBJ(obj);
})

},[]);


const[billstate,setBillState]=useState([]);
const sendData = () =>{
  const a=Customers;
  a.preventDefault();
  const reqOptions = {
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(a)
  }
  fetch("http://localhost:8080/setBill",a)
  .then(resp=>resp.text())
  .then(text=>text.length ? JSON.parse(text):{})
  .then(obj => {
      setBillState(obj);
  })
}

  var total=0;
  const sum=(e)=>{
    total+=e;
  }

   const handleCancel = (id) => {
  //   const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
  //   setAppointments(updatedAppointments);
   };

  return (
    <div className="appointment-table">
        <h1>Customer Appointment</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Salon Neme</th>
            <th>Barbers</th>
            <th>Services</th>
            <th>Time Slot</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map(customers => (
            <tr key={customers}>
              <td>{customers.customer.first_name}{" "}{customers.customer.last_name}</td>
              <td>{customers.barber.salon_id.salon_name}</td>
              <td>{customers.barber.barber_name}</td>
              <td>{customers.service.serviceName}</td>
              <td>{datebook}{" "}{customers.slot.start_time}</td>
              <td  onchange={sum(customers.service.price)}>{"₹"}{customers.service.price}</td>
              <td>
                <button onClick={() => handleCancel()}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <br/>
          <div>
            {/* {total} */}
            <Link to='/cBill' >
            <button type="submit" variant="primary" onClick={(e)=>{sendData()}}>Final Bill</button>
            </Link>
            </div>
      <style jsx>{`
        .appointment-table {
          font-family: Arial, sans-serif;
          margin: 20px;
        }

        table {
          border-collapse: collapse;
          width: 100%;
        }

        th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        td{
          background-color: #AED6F1 ;
        }

        th {
          background-color: #3498DB;
        }

        button {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
        }

        button:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default CustomerAppointment;