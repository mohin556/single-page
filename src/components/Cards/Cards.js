import React from 'react';
import './Cards.css';
import { Card, Row, Col, Button } from 'react-bootstrap';





const Cards = ({product}) => {
    const {name,nothing,price,email} = product;
    
    return (
        <section className='  ' >
            <div className='' >
            <Card className="my-3 custom-card ">
      <Card.Body>
        <Row>
          <Col xs={12} md={4}>
            <img src={nothing} alt="" className="img-fluid" />
          </Col>
          <Col xs={12} md={8}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
            </div>
        </section>
    );
};

export default Cards;