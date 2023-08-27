import React from 'react';
import './Extra.css';
import Navbars from '../Navbar/Navbar';
import { useState, useEffect } from 'react';
import Details from '../Details/Details';
import Cards from '../Cards/Cards';
import { Container, Row, Col } from 'react-bootstrap';

const Extra = () => {
    const [products, setProduct] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/product')
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);
  
    return (
      <div className='home-main'>
        <Navbars />
        <section>
          <div>
            <h1>Welcome to Home component</h1>
            <div className="">
              <Container>
                <Row>
                  {products.map((product) => (
                    <Col key={product._id} md={12} className="">
                      <Cards product={product} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Extra;