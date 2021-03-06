import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navibar() {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">UGLY FOOD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#humor">유머잡담</Nav.Link>
                    <Nav.Link href="#recipe">자취 레시피</Nav.Link>
                    <Nav.Link href="restaurants">주변 맛집</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Learn More</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Support
                </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Navibar;