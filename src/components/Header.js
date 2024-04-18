import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './../styles/Header.css'

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid >
        <Navbar.Brand href="/home">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Link style={{color:'white'}} to="/home">Home</Link>
          <Link style={{color:'white'}} to="/create">New product</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header