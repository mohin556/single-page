import React from 'react';
import './Product.css';
import Navbars from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import ReactForm from '../ReactForm/ReactForm';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';





const Product = () => {
    
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
  
  
 


    fetch(`http://localhost:5000/product`,{

       method: 'POST',
       headers : {
        'content-type': 'application/json'
       },
      body : JSON.stringify(data)
  })
    .then(res=>res.json())
    .then(data => console.log(data))


    await Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your submission was successful! Thank you.',
    });


    window.location.reload();

  };
  
   


    return (
        <div  className='home-main'>
        < Navbars/>
           <section className='home-container' >
           
           
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">
     
        <input
          className={`form-input ${errors.name ? 'error' : ''}`}
          type="text"
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {errors.name && <span className="error-text">Name is required</span>}
      </label>
      <label className="form-label">

      <input
          className={`form-input ${errors.name ? 'error' : ''}`}
          type="text"
          placeholder='QUantity'
          {...register('nothing', { required: true })}
        />
        {errors.name && <span className="error-text">Name is required</span>}
      </label>
      <label className="form-label">

      <input
          className={`form-input ${errors.name ? 'error' : ''}`}
          type="number"
          placeholder='Price'
          {...register('price', { required: true })}
        />
        {errors.name && <span className="error-text">Name is required</span>}
      </label>
      <label className="form-label">
 
        <input
          className={`form-input ${errors.email ? 'error' : ''}`}
          type="email"
          placeholder='Email'
          {...register('email', { required: true })}
        />
        {errors.email && <span className="error-text">Email is required</span>}
      </label>
      <button className="submit-button" type="submit">Submit</button>
    </form>
           

           </section>
     </div>
    );
};

export default Product;