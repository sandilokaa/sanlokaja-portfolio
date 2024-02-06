import React from "react";
import {
    Row,
    Col,
    Container,
    Image,
    Button
} from "react-bootstrap";
import Marquee from "react-fast-marquee";

import HomeLayout from "../../layouts/home/HomeLayout";
import HeaderImage1 from "../../assets/images/header-1-img.png";
import HeaderBigImage from "../../assets/images/header-big-image.png";
import MarqueeTechStack from "../../components/marquee/MarqueeTechStack";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Home = () => {

    return (

        <HomeLayout>

            <div id="header-my-portfolio">
                <Container>

                    <h4>INTROODUCING</h4>

                    <div>
                        <Row className="row-header-title">
                            <Col xs={12} xl={8} className="header-title">
                                <p>WEBSITE</p>
                            </Col>
                            <Col xs={12} xl={4} className="header-image">
                                <Image src={HeaderImage1} />
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
                                <Button>
                                    Let's Talk
                                </Button>
                            </Col>
                            <Col xs={6} xl={3} className="header-button-aboutus">
                                <Button>
                                    About Us
                                </Button>
                            </Col>
                        </Row>
                        <Row className="header-big-image">
                            <Col xs={12} xl={12}>
                                <div className="header-round-arrow">
                                    <div className="header-round-arrow-inside">
                                        <i className="bi bi-arrow-up-left"></i>
                                    </div>
                                </div>
                                <Image src={HeaderBigImage} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div id="marquee-tech-stack">
                <div className="my-tech-stack">
                    <Marquee
                        className="custom-marquee"
                        speed={70}
                        style={{backgroundColor: '#101010'}}

                    >
                        <MarqueeTechStack myTechStack="JAVASCRIPT"/>
                        <MarqueeTechStack myTechStack="GOLANG"/>
                        <MarqueeTechStack myTechStack="NODEJS"/>
                        <MarqueeTechStack myTechStack="REACTJS"/>
                        <MarqueeTechStack myTechStack="GORM"/>
                        <MarqueeTechStack myTechStack="SEQUELIZEJS"/>
                        <MarqueeTechStack myTechStack="EXPRESJS"/>
                        <MarqueeTechStack myTechStack="POSTMAN"/>
                    </Marquee>
                </div>
            </div>

        </HomeLayout>

    );
};

export default Home;