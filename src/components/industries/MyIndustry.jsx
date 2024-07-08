import React from "react";

import {
    Row,
    Col,
    Container,
} from "react-bootstrap";


import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const MyIndustry = () => {

    return (

        <Container>
            <Row className="industry-head-title-one">
                <Col xs={12} xl={{ span: 4, offset: 4 }} className="d-flex justify-content-center text-center">
                    <p>
                        The sector where I apply my fullstack <br /> digital developer expertise.
                    </p>
                </Col>
            </Row>
            <Row className="industry-head-title-two mt-4">
                <Col xs={12} xl={{ span: 8, offset: 2 }} className="d-flex justify-content-center text-center">
                    <p>
                        I apply my fullstack digital developer expertise to various industries, creating and maintaining comprehensive digital solutions.
                    </p>
                </Col>
            </Row>
            <Row className="industry-type">
                <Col xs={12} xl={4} className="mt-4">
                    <div style={{height: '320px', width: '100%', background: '#292929'}}></div>
                </Col>
                <Col xs={12} xl={4} className="mt-4">
                <div style={{height: '320px', width: '100%', background: '#292929'}}></div>
                
                </Col>
                <Col xs={12} xl={4} className="mt-4">
                <div style={{height: '320px', width: '100%', background: '#292929'}}></div>
                
                </Col>
                <Col xs={12} xl={4} className="mt-4">
                <div style={{height: '320px', width: '100%', background: '#292929'}}></div>
                
                </Col>
                <Col xs={12} xl={4} className="mt-4"> 
                <div style={{height: '320px', width: '100%', background: '#292929'}}></div>
                
                </Col>
            </Row>
        </Container>

    );

};

export default MyIndustry;