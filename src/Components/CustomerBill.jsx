import React from 'react';
import './CustomerBill.css'; 

function calculateTotalPrice(services) {
  const subtotal = services.reduce((total, service) => total + service.price, 0);
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + tax;
  return total;
}

function calculateTax(services) {
  return calculateTotalPrice(services) - calculateSubtotal(services);
}

function calculateSubtotal(services) {
  return services.reduce((total, service) => total + service.price, 0);
}

function UserBill({ salonName, customerName, billId, services }) {
  return (
    <div className="user-bill">
      <h2>Final Bill</h2>
      <table>
        <tbody>
          <tr>
            <th>Salon Name:</th>
            <td>{salonName}</td>
          </tr>
          <tr>
            <th>Customer Name:</th>
            <td>{customerName}</td>
          </tr>
          <tr>
            <th>Bill ID:</th>
            <td>{billId}</td>
          </tr>
        </tbody>
      </table>
      <h3>Services:</h3>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>&#8377;{service.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="totals">
        <p>Subtotal: &#8377;{calculateSubtotal(services).toFixed(2)}</p>
        <p>Tax (18%): &#8377;{calculateTax(services).toFixed(2)}</p>
        <p>Total Price (including tax): &#8377;{calculateTotalPrice(services).toFixed(2)}</p>
      </div>
    </div>
  );
}

const CustomerBill = () => {
  const salonName = 'My Salon';
  const customerName = 'John Doe';
  const billId = 12345;
  const services = [
    { id: 1, name: 'Haircut', price: 350 },
    { id: 2, name: 'Manicure', price: 150 },
    { id: 3, name: 'Pedicure', price: 200 },
  ];

  return (
    <div className="user-bill-container">
      <div className="user-bill-card">
        <UserBill
           billId={billId}
          salonName={salonName}
          customerName={customerName} 
          services={services}
        />
      </div>
    </div>
  );
};

export default CustomerBill;
