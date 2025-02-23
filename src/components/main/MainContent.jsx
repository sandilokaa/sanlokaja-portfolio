import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";
import Particles from "../common/Particle";

import ContactModal from "../modal/ContactModal";
import LetsTalkIcon from "../../assets/images/icons/lets-talk.svg";
import MyBestProjectIcon from "../../assets/images/icons/best-project.svg";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const MainContent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Container>
            <div style={{ position: 'relative' }}>
                <div style={{ width: '100%', height: 'auto', position: 'relative', top: 0, zIndex: 0 }}>
                    <div>
                        <h4>INTROODUCING</h4>
                        <div>
                            <Row className="row-header-title">
                                <Col xs={12} xl={8} className="header-title">
                                    <p>WEBSITE</p>
                                </Col>
                            </Row>
                            <Row className="row-header-title-2">
                                <Col xs={12} xl={12} className="header-title">
                                    <p>ENTHUSIAST</p>
                                </Col>
                            </Row>
                            <Row className="row-header-greeting">
                                <Col xs={12} xl={6}>
                                    <p>Certainly! In summary, I'm Sandi Loka, a highly skilled Fullstack Web Developer
                                        recognized for creating high-performance and visually appealing websites.
                                    </p>
                                </Col>
                                <Col xs={6} xl={3} className="header-complete-projects">
                                    <h3>20</h3>
                                    <p>Completed Projects</p>
                                </Col>
                                <Col xs={6} xl={3} className="header-years-experience">
                                    <h3>3+</h3>
                                    <p>Years of experience</p>
                                </Col>
                            </Row>
                            <Row className="row-header-button">
                                <Col xs={12} xl={6} className="horizontal-line">
                                    <hr />
                                </Col>
                                <Col xs={6} xl={3} className="header-button-talk">
                                    <Button onClick={handleShow}>
                                        <Image
                                            src={LetsTalkIcon}
                                            style={{
                                                marginRight: '15px',
                                                transition: '0.3s all ease-in-out'
                                            }}
                                        />
                                        Let's Talk With Me
                                    </Button>
                                </Col>
                                <Col xs={6} xl={3} className="header-button-aboutus">
                                    <Button>
                                        <Image
                                            src={MyBestProjectIcon}
                                            style={{
                                                marginRight: '15px',
                                                transition: '0.3s all ease-in-out'
                                            }}
                                        />
                                        My Best Project
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <ContactModal
                            show={show}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
                <div style={{ top: '0', width: '100%', height: '100vh', position: 'absolute', zIndex: 1 }}>
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
            </div>
        </Container>

    );

};

export default MainContent;