import React from "react";

import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";

import ArrowIcon from "../../assets/images/icons/arrow.svg";
import Workflow from "./Workflow";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const CaseStudy = () => {

    return (

        <Container>
            <Row>
                <Col xs={12} xl={{ span: 7, offset: 4 }}>
                    <h1>EMPOWERING YOUR <br /> DIGITAL JOURNEY</h1>
                </Col>
            </Row>
            <hr style={{ color: '#FFFFFF', marginTop: '6%' }} />
            <Row className="case-study-description">
                <Col xs={12} xl={3}>
                    <div className="sticky">
                        <Button className="btn-case-study">
                            SEE ALL CASE STUDIES
                            <Image
                                src={ArrowIcon}
                                style={{
                                    marginLeft: '15px'
                                }}
                            />
                        </Button>
                    </div>
                </Col>
                <Col xs={12} xl={{span: 7, offset: 1}} className="cs-short-description">
                    <Row>
                        <Col xs={12} xl={12} className="description-one">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod.
                            </p>
                        </Col>
                        <Col xs={12} xl={12} className="description-two">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr style={{ color: '#FFFFFF', marginTop: '6%' }} />
            <Workflow/>
        </Container>

    );

};

export default CaseStudy;