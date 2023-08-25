import React from 'react';
import './Contact.css';
import Navbars from '../Navbar/Navbar';
import { useState, useEffect } from 'react';
import Details from '../Details/Details';

const Contact = () => {

 



    return (
        <div  className='home-main'>
        < Navbars/>
           <section className='home-container' >
            
            <Details/>


           </section>
     </div>
    );
};

export default Contact;