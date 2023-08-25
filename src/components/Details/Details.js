import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Details.css'
const Details = () => {

  const [details,setDetails] = useState([]);
  console.log(details)
   useEffect(()=>{
     fetch('http://localhost:5000/details')
     .then(res=>res.json())
     .then(data => setDetails(data))

   },[])

   const handleDelete = (_id) => {
    // Make an API call to delete the detail by its _id
    fetch(`http://localhost:5000/details/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(deletedDetail => {
        // Update the state to remove the deleted detail
        setDetails(prevDetails => prevDetails.filter(detail => detail._id !== _id));
      })
      .catch(error => console.error('Error deleting detail:', error));
  };


  return (
  //   <section>
  //   {details.map((detail, index) => (
  //     <div key={index}>
  //       <h3>Name: {detail.name}</h3>
  //       <p>Selected Sector: {detail.selectedSector}</p>
       
  //       <h2>{detail.selectedSectorObject.title}</h2>
        
      
      
  //       <p>Agreed to Terms: {detail.agreeToTerms ? 'Yes' : 'No'}</p>
  //     </div>
  //   ))}
  // </section>
  
  <div className="details-container">
  {details.map(({ _id, name, selectedSector, selectedSectorObject, agreeToTerms }) => (
    <Card key={_id} className="custom-card mb-4">
      <Card.Body className="custom-text-left">
        <h3>Name: {name}</h3>
        <p>Selected Sector: {selectedSector}</p>
        <h2>{selectedSectorObject.title}</h2>
        <p>Agreed to Terms: {agreeToTerms ? 'Yes' : 'No'}</p>
        <Button variant="danger" onClick={() => handleDelete(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  ))}
</div>
  );
};

export default Details;