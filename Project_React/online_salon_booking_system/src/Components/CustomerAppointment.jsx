import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const CustomerAppointment = () => {



  const bookingobj=JSON.parse(localStorage.getItem("logincusOBJ")).customer_id;
  
const init = {
  customer_id:'',
  price:'',
}
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


// const [billobject,setBillObject]=useState({
//   customer_id:bookingobj,
//   total_amount:total
// });
// const sendData =(e) =>{
//   e.preventDefault();
//   alert(JSON.stringify(billobject));
//   const reqOptions ={

//       method:'POST',
//       headers:{'content-type':'application/json'},
//       body:JSON.stringify(billobject)
    
//   }
//   fetch("http://localhost:8080/setBillData"+reqOptions)
//   .then(resp=>resp.text())
//   .then(text=>text.length ? JSON.parse(text):{})
//     .then(obj =>{
//       if(Object.keys(obj).length===0)
//       {
//         alert("fail");
        
//       }
//       else{
//         if(obj.status === false)
//         {
//           alert("Not Login.");
//         }
//         else
//         {
//         alert("success");
//       }
//       }
//     })
// }




  var total=0;
  const sum = (e) => {
    total += e;
    
  };

   const handleCancel = () => {
 
   };

  return (
    <div className="appointment-table">
            <div class="p-0 mb-3  bg-dark text-white"> 
         {/* <HomePage/>  */}
         <nav className="navbar navbar-expand-sm nanbar-dark mb-2 ">  
          {/* it diaplay header bare link in single line */}
          <div >
          <ul className="navbar-nav" >
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
              <Link to='/logout' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                Logout</Link>
            </li>
          </ul>
         </div>
       </nav>
       </div>
      {/* {alert(JSON.stringify(Customers))} */}
        <h1>Customer Appointment</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Salon Name</th>
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
              <td>{customers.servic.serviceName}</td>
              <td>{" "}{customers.slot.start_time}</td>
              <td  onchange={sum(customers.servic.price)}>{"₹"}{customers.servic.price}</td>
              <td>
                <button onClick={() => handleCancel()}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
       
        </table>
        {/* {total} */}
        {/* <button type="submit" variant="primary" onClick={localStorage.setItem("total",JSON.stringify(total))}>Final Bill</button> */}
        <br/>
           <div>
             {/* {total}   */}
             <Link to='/cBill'>
                    <button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        localStorage.setItem("amount_total", JSON.stringify(total));
                        localStorage.setItem("customers", JSON.stringify(Customers));
                      }}
                >
                  Final Bill
                </button>
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