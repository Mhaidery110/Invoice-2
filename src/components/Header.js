import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return  (
       <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#">Invoice App</Navbar.Brand>   
      </Container>
    </Navbar>
  )

}

export default Header;
