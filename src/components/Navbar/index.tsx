import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconPeople from "../icons/people";
import IconMapLocationDot from "../icons/map";
import IconBxInfoCircle from "../icons/info";
import IconUser from "../icons/user";

const Barra: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="bottom" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex-grow-1 justify-content-between">
                        <Nav.Link as={Link} className="nav-Item items-center" to="/">
                            <IconPeople className='text-black-700 m-auto' width='25px' height='auto' />
                            <p>Comunidade</p>
                        </Nav.Link>
                        <Nav.Link as={Link} className="nav-Item" to="/map">
                            <IconMapLocationDot className="text-black-900" width='24px' height='24px' />
                            <p>Mapa</p>
                        </Nav.Link>
                        <Nav.Link as={Link} className="nav-Item" to="/tarefas">
                            <IconBxInfoCircle width='24px' height='auto' />
                            <p>Aprenda</p>
                        </Nav.Link>
                        <Nav.Link as={Link} className="nav-Item" to="/profile">
                            <IconUser width='24px' height='auto' />
                            <p>Perfil</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Barra;