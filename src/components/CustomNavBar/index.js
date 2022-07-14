import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './CustomNavBar.css';

export default class CustomNavBar extends React.Component {
  render() {
    return (
        <Navbar className="noprint" expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/connect_four">
                                Connect Four
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/bingo">
                                Bingo
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
}
