import React from 'react';
import './Product.css';
import Navbars from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import ReactForm from '../ReactForm/ReactForm';

import { useForm } from 'react-hook-form';





const Product = () => {
    
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   await axios.post('http://localhost:5000/submit-form', data);
    //   alert('Form submitted successfully');
    //   reset();
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('An error occurred while submitting the form');
    // }
    console.log(data)
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