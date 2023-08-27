import React from 'react';
import './Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';







const Cards = ({ product }) => {
  const { name, nothing, price, email } = product;

  return (
    <section className='centered-card'>
      <Card>
      {/* <Card.Img variant="top" src={nothing} alt="Card Image" /> */}
      <Card.Img
  variant="top"
  src={nothing}
  alt="Card Image"
  style={{ maxWidth: '100%', height: 'auto' }}
/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price},{email}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </section>
  );
};


export default Cards;