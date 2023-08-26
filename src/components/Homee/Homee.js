import React, { useEffect, useState } from 'react';
import './Home.css'
import Navbars from '../Navbar/Navbar';
// import Cards from '../Cards/Cards';
// import Product from './../Product/Product';
// import { Container, Row, Col } from 'react-bootstrap';
import From from '../Home/Home';
const Home = () => {
   

    // const [products,setProduct] = useState([]);
    // console.log(products)
    //  useEffect(()=>{
    //    fetch('http://localhost:5000/product')
    //    .then(res=>res.json())
    //    .then(data => setProduct(data))

    //  },[])

     



    return (
        <div  className='home-main'>
           < Navbars/>
              <section className='home-container' >
                    {/* <div className='home  '>
          
                     <h1>Well Come to Home component</h1>
                 
                            <div className="d-flex justify-content-center p-4" >
                            <Container>
                                <Row>
                               {products.map((product) => (
                                <Col key={product._id} md={6}>
                             <Cards product={product} />
                                    </Col>
                                    ))}
                             </Row>
                           </Container>
                            </div>



                    </div> */}
              


              </section>
        </div>
    );
};

export default Home;