import React, { useState } from "react";
import {
    Container,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";

import ContactModal from "../modal/ContactModal";

import LogoPortfolio from "../../assets/images/logo-portfolio.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const NavbarGeneral = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Navbar className="navbar" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className="nav-brand" href="#">
                        <Image src={LogoPortfolio} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About Us</Nav.Link>
                            <Nav.Link>Project</Nav.Link>
                            <Nav.Link>Service</Nav.Link>
                            <Nav.Link onClick={handleShow}>Let's Talk</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ContactModal
                show={show}
                handleClose={handleClose}
            />
        </>

    );

};

export default NavbarGeneral;