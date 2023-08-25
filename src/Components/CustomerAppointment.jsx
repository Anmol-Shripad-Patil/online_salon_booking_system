import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const CustomerAppointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, customer: 'Anmol Patil', service: 'Haircut', date: '2023-08-25 10:00 AM' },
    { id: 2, customer: 'Anmol Patil', service: 'Manicure', date: '2023-08-26 2:30 PM' },
    // Add more appointment data here
  ]);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-table">
        <h1>Customer Appointment</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.customer}</td>
              <td>{appointment.service}</td>
              <td>{appointment.date}</td>
              <td>
                <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <br/>
          <div>
            <Link to='/cBill' >
            <button variant="primary">Final Bill</button>
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