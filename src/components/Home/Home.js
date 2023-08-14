import React from 'react';
import './Home.css'
import Navbars from './../Navbar/Navbar';
const Home = () => {
    return (
        <div  className='home-main'>
           < Navbars/>
              <section className='home-container' >
                    <div className='home'>
          
                     <h1>Well Come to Home component</h1>
                    </div>
              </section>
        </div>
    );
};

export default Home;