import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


import './Details.css'
import Swal from 'sweetalert2';
const Details = () => {

  const [details,setDetails] = useState([]);
  console.log(details)
   useEffect(()=>{
     fetch('http://localhost:5000/details')
     .then(res=>res.json())
     .then(data => setDetails(data))

   },[])

   const handleDelete = (_id) => {
  
        
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              fetch(`http://localhost:5000/details/${_id}`,{
                method : 'DELETE'
              })
              .then(res=> res.json())
              .then(data => {
                console.log(data)
               if(data.deletedCount > 0){
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your option has been deleted.',
                  icon: 'success',
                  timer: 2000, 
                  showConfirmButton: false
                });
    
               
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
               }
               
              })
            }
          }) 

  };


  return (
 
    <div className="mt-4" >
      <h4>Your Details</h4>
    

      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sector Title & Selected option </th>
      
            <th> Agree &  Action </th>
          </tr>
        </thead>
        <tbody>
          {details.map(({ _id, name, selectedSectorObject,selectedSector,
agreeToTerms }, index) => (
            <tr key={_id}>
              <td>{name}</td>
              <td>{selectedSectorObject.title} & {selectedSector} </td>
        
              <td>
                {agreeToTerms ? (
            <span className="text-success">✓ Agreed</span>
          ) : (
            <span className="text-danger">✗ Not Agreed</span>
          )}

                <Button variant="danger" onClick={() => handleDelete(_id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div>
  );
};

export default Details;