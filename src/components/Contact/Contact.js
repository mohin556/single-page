import React from 'react';
import './Contact.css';
import Navbars from '../Navbar/Navbar';
import { useState, useEffect } from 'react';

const Contact = () => {

  
        const [sectors, setSectors] = useState([]);
        const [name, setName] = useState('');
        const [selectedSectors, setSelectedSectors] = useState([]);
        const [agreeToTerms, setAgreeToTerms] = useState(false);
        const [formValid, setFormValid] = useState(false);
      
        useEffect(() => {
          // Simulate fetching "Sectors" data from the backend
          const fetchedSectors = ['Sector 1', 'Sector 2', 'Sector 3'];
          setSectors(fetchedSectors);
        }, []);
      
        useEffect(() => {
          // Update form validity whenever any field changes
          setFormValid(name !== '' && selectedSectors.length > 0 && agreeToTerms);
        }, [name, selectedSectors, agreeToTerms]);
      
        const handleSave = () => {
          // Simulate sending data to the backend for storage
          if (formValid) {
            console.log('Data saved:', name, selectedSectors, agreeToTerms);
            // You would make an API call to store data here
          }
        };
      



    return (
        <div  className='home-main'>
        < Navbars/>
           <section className='home-container' >
           <div className='container'>
      <h1>User Profile Form</h1>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Select Sectors:</label>
      <select multiple value={selectedSectors} onChange={(e) => setSelectedSectors(Array.from(e.target.selectedOptions, option => option.value))}>
        {sectors.map((sector, index) => (
          <option key={index} value={sector}>
            {sector}
          </option>
        ))}
      </select>

      <label>
        <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
        Agree to terms
      </label>

      <button onClick={handleSave} disabled={!formValid}>
        Save
      </button>
    </div>
           </section>
     </div>
    );
};

export default Contact;