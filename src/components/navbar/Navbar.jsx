import React from "react";
import {
    Container,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";
import LogoPortfolio from "../../assets/images/logo-portfolio.png";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const NavbarGeneral = () => {

    return (
        <Navbar className="navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="#">
                    <Image src={LogoPortfolio}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About Us</Nav.Link>
                        <Nav.Link>Project</Nav.Link>
                        <Nav.Link>Service</Nav.Link>
                        <Nav.Link>Let's Talk</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavbarGeneral;