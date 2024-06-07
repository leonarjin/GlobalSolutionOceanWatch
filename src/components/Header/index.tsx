import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import oceanLogo from '../images/ocean.png'

const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex-grow-1 justify-content-center">
                        <Nav.Link as={Link} className="nav-Item items-center" to="/">
                            <img src={oceanLogo} height={50} alt="ocean logo"></img>
                        </Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;