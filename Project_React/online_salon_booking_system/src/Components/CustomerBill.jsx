import React, { useState, useEffect } from 'react';
import './CustomerBill.css';
import './CustomerHomePage.css';

const CustomerBill = () => {
  const bookingobj = JSON.parse(localStorage.getItem("logincusOBJ")).customer_id;
  const total = JSON.parse(localStorage.getItem("amount_total"));
  const customers = JSON.parse(localStorage.getItem("customers"));

  const [Billing, setCustomerOBJ] = useState([]);
  
  const billobject = {
    customer_id: bookingobj,
    total_amount: total
  }

  

  useEffect(() => {
    
  //  alert(JSON.stringify(customers));
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(billobject)
    };

    fetch("http://localhost:8080/setBillData", reqOptions)
      .then(resp => resp.text())
      .then(text=>JSON.parse(text))
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          
        } else {
          if (obj.status === false) {
            
          } else {
            
              setCustomerOBJ(obj);
              
            
          }
        }
      });
  },[]);

  return (
    
    <div className="user-bill backImag1">
      {/* {alert(Billing)}   */}
      <h2>Final Bill</h2>
      {/* <p> {JSON.stringify(customers)}</p> */}
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Salon Name:</th>
            <td key={Billing.barber}>{customers[1].barber.salon_id.salon_name}</td>
          </tr>
          <tr>
            <th>Customer Name:</th>
            <td>{Billing.customer && `${Billing.customer.first_name} ${Billing.customer.last_name}`}</td>
          </tr>
          <tr>
            <th>Bill ID:</th>
            <td>{Billing.billing_id}</td>
          </tr>
        </tbody>
      </table>
      <h3>Services:</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
           {/* {customers.map((customer) => ( */}
           
           {
                  customers.map( cust => {
                    return (
                      <tr>
                        
                        <td> {cust.servic.serviceName}</td>
                        
                        <td>{cust.servic.price}</td>
                      </tr>
                    )
                  })
               }
               <tr>
                <td style={{textAlign: 'right'}}>{"Total Price :"}</td>
                <td >{total}</td>
               </tr>
           
           
          
           
        </tbody>
            </table>

            {/* <table>
               <tr>
                <th> salon name </th>
                <th> services </th>
               </tr>
               {
                  customers.map( cust => {
                    return (
                      <tr>
                        <td> {cust.barber.salon_id.salon_name} </td>
                        <td> {cust.service.serviceName}</td>
                      </tr>
                    )
                  })
               }
            </table> */}
            <div className="totals" >
        
        {/* <p style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'left' }}>Total Price:{total}</p> */}
      </div>
    </div>
  );
  
}

export default CustomerBill;
