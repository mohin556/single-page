import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './From.css';
import { useState } from 'react';
import Sectors from '../Sectors/Sectors';

const From = () => {
  const [selectedSector, setSelectedSector] = useState('');
  const [sectorsList, setSectorsList] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/sectors`)
      .then(res => res.json())
      .then(data => setSectorsList(data))
      .catch(error => console.error("Error fetching sectors:", error));
  }, []);

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
    
    
  };

  const handleTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSaveClick = () => {
    if (agreeToTerms) {
      // Save the selected sector to your backend or perform other actions
      const selectedSectorObject = sectorsList.find(sector => sector._id === selectedSector);
      console.log('Selected Sector:', selectedSectorObject);
     
      
    } else {
      alert('Please agree to the terms before saving.');
    }
  };

  return (
    <section>
      <div>
        <h1>Bangladesh</h1>
        <Form.Control type="text" placeholder="Normal text" />
      </div>
      <div>
        <label htmlFor="sectorSelect">Select a Sector:</label>
        <select
          id="sectorSelect"
          value={selectedSector}
          onChange={handleSectorChange}
          required
        >
          <option value="">Select </option>
          {sectorsList.map(sector => (
        <optgroup key={sector._id}  label={sector.title}>
    
          <option  value={sector._id} >{sector.one}</option>
          <option  value={sector._id} >{sector.two}</option>
          <option  value={sector._id}>{sector.three}</option>
        </optgroup>
          ))}
        </select>
        <br />
        <input
          type="checkbox"
          id="agreeTerms"
          checked={agreeToTerms}
          onChange={handleTermsChange}
        />
        <label htmlFor="agreeTerms">Agree to Terms</label>
        <br />
        <button onClick={handleSaveClick}>Save</button>
        {selectedSector && (
          <p>You selected: {selectedSector}</p>
        )}
      </div>
    </section>
  );
};

export default From;