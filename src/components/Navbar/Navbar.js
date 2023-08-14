import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  const buttonStyle = {
    marginRight: '10px',   // Adjust the margin as needed
    fontSize: '18px',      // Adjust the font size as needed
    border : '2px solid black'
  };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><h4>Run<span style={{ color: '#3F9668',fontWeight: 'bold'}}>Fast</span> </h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='me-3' style={{ fontSize: '18px', fontWeight: 'bolder' }}  href="/">Home</Nav.Link>
              <Nav.Link className='me-3' style={{ fontSize: '18px', fontWeight: 'bolder' }}  href="/contact">Contact Us</Nav.Link>
              <Nav.Link className='me-3' style={{ fontSize: '18px', fontWeight: 'bolder' }}  href="/product">Product</Nav.Link>
              {/* <NavDropdown className='me-3' style={{ fontSize: '18px', fontWeight: 'bolder' }}  title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"> Tracking </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                 Power System
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  About Us
                </NavDropdown.Item>
              </NavDropdown> */}
              
            </Nav>
            <Form className="d-flex">
           
             
            <Button style={{backgroundColor: '#1DC68C'}}>Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbars;