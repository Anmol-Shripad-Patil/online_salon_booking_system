// SalonServiceSelection.js
import React, { useState } from 'react';

const SalonServiceSelection = ({ services, onSelectService }) => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    onSelectService(service);
  };

  return (
    <div >
      <h4>Available Services</h4>
      <ul className="list-group">
        {services.map((service, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedService === service ? 'active' : ''}`}
            onClick={() => handleServiceSelect(service)}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalonServiceSelection;
