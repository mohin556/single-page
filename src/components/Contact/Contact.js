import React from 'react';
import './Contact.css';
import Navbars from '../Navbar/Navbar';
import { useState, useEffect } from 'react';

const Contact = () => {

  const [sectors, setSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState('');

      
  useEffect(() => {
    // Fetch sectors from your API and update the state
    fetchSectors();
  }, []);
    
  const fetchSectors = async () => {
    try {
      const response = await fetch('/api/sectors'); // Replace with your API endpoint
      const data = await response.json();
      setSectors(data);
    } catch (error) {
      console.error('Error fetching sectors:', error);
    }
  };

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };
  const addToDatabase = async (selectedSector) => {
    try {
      const response = await fetch('/api/add-sector', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sectorId: selectedSector }), // Adjust payload as needed
      });
  
      if (response.ok) {
        console.log('Sector added to the database');
      } else {
        console.error('Error adding sector to the database');
      }
    } catch (error) {
      console.error('Error adding sector:', error);
    }
  };



    return (
        <div  className='home-main'>
        < Navbars/>
           <section className='home-container' >
           <div>
      <select value={selectedSector} onChange={handleSectorChange}>
        <option value="">Select a sector</option>
        <option value="">Option 3</option>
        {sectors.map((sector) => (
          <option key={sector.id} value={sector.id}>
            {sector.name}
          </option>
        ))}
      </select>
      <button onClick={() => addToDatabase(selectedSector)}>Add to Database</button>
    </div>


           </section>
     </div>
    );
};

export default Contact;