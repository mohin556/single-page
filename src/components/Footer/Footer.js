import React from 'react';

const Footer = () => {
    return (
        <footer>
        <p>&copy; 2023 My App. All rights reserved.</p>

       {/* <div>
       const From = () => {
  const [selectedSector, setSelectedSector] = useState([]);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [selector,setSelector] = useState([])
  console.log(selector)

  useEffect(()=>{
    fetch(`http://localhost:5000/sectors`)
    .then(res=> res.json())
    .then(data=> setSelector(data))
  },[])


  // const sectorOptions = [
  //   'Technology',
  //   'Finance',
  //   'Healthcare',
  //   'Energy',
  //   'Retail',
    
  // ];

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };

  const handleTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSaveClick = () => {
    if (agreeToTerms) {
      // Save the selected sector to your backend or perform other actions
      console.log('Selected Sector:', selectedSector);
    } else {
      alert('Please agree to the terms before saving.');
    }
  };

    

    return (
        <section>
            <div>
                <h1>Hello world</h1>
                <Form.Control type="text" placeholder="Normal text" />
            </div>
            <div>
      <label htmlFor="sectorSelect">Select a Sector:</label>
      <select
        id="sectorSelect"
        value={selectedSector}
        onChange={handleSectorChange}
        required  // Add the required attribute here
      >
        <option value="">Select an option</option>
        {selector.map(sector => (
          <Sectors key={sector._id} sector={sector}/>
       
   
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
      <button onClick={handleSaveClick}>
        Save
      </button>
      {selectedSector && <p>You selected: {selectedSector}</p>}
    </div>
        </section>
       </div>
 */}

        </footer>



    );
};

export default Footer;