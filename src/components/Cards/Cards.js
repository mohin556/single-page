import React from 'react';
import './Cards.css';
import { Card, Row, Col, Button } from 'react-bootstrap';





const Cards = ({product}) => {
    const {name,nothing,price,email} = product;
    
    return (
        <section className='p-6' >
              <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top"  src={nothing} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
     <h4>{email}</h4>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </section>
    );
};

export default Cards;