import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary text-light">
      <Container>
        <Navbar.Brand style={{color:"white"}} className=' fs-5' href="#home">Employee Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{color:"white"}} >Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}} >About</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}} >Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header