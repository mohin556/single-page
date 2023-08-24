import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './From.css';
import Navbars from '../Navbar/Navbar';

const From = () => {
  const [selectedSector, setSelectedSector] = useState('');
  const [sectorsList, setSectorsList] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
 

  useEffect(() => {
    fetch(`http://localhost:5000/sectors`)
      .then(res => res.json())
      .then(data => {
        setSectorsList(data);
        
        // Set the initial selected sector (e.g., sector.one) here
        setSelectedSector(data[0]?.one || '');
      })
      .catch(error => console.error("Error fetching sectors:", error));
  }, []);

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
   
  };

  const handleTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSaveClick = () => {
    if (!selectedSector) {
      alert('Please select a sector before saving.');
      return;
    }
    if (agreeToTerms) {
      const selectedSectorObject = sectorsList.find(sector =>
        sector.one === selectedSector ||
        sector.two === selectedSector ||
        sector.three === selectedSector ||
        sector.four === selectedSector
      );

      console.log('Selected Sector:', selectedSectorObject);
    } else {
      alert('Please agree to the terms before saving.');
    }
  };

  return (
    <div className='home-main'>
      <Navbars />
      <section className='home-container'>
        <div>
          <h4>Please enter your name and pick the Sectors you are currently involved in.</h4>
          <Form.Control type="text" placeholder="Normal text" />
        </div>
        <div>
          <label htmlFor="sectorSelect">Select a Sector:</label>
          <select
            id="sectorSelect"
            value={selectedSector}
            onChange={handleSectorChange}
            required
            size={5}
            style={{ maxHeight: '120px', overflowY: 'scroll' }}
          >
            {sectorsList.map((sector, index) => (
              <optgroup key={sector._id} label={sector.title}>
                <option value={sector.one}>{sector.one}</option>
                <option value={sector.two}>{sector.two}</option>
                <option value={sector.three}>{sector.three}</option>
                <option value={sector.four}>{sector.four}</option>
              </optgroup>
            ))}
          </select>
          {selectedSector && (
            <p>Selected option: {selectedSector}</p>
          )}
          <br />
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeToTerms}
            onChange={handleTermsChange}
          />
          <label htmlFor="agreeTerms">Agree to Terms</label>
          <br />
          <button className='form-btn' onClick={handleSaveClick}>Save</button>
        </div>
      </section>
    </div>
  );
};

export default From;
