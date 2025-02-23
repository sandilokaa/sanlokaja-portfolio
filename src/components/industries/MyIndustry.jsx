import React from "react";

import {
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";
import SpotlightCard from "../common/SpotlightCard";


import ArrowImage from "../../assets/images/icons/arrow.svg";

import { IndustryData } from "../../assets/js/industryData";

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
                {IndustryData.Collections.map((industry) => {
                    return (
                        <Col xs={12} xl={4} className="mt-4" key={industry.id}>
                            <SpotlightCard>
                                <Row>
                                    <Col xs={10} xl={10}>
                                        <h1>{industry.properties.title}</h1>
                                    </Col>
                                    <Col xs={2} xl={2} className="d-flex justify-content-end align-items-center">
                                        <Image src={ArrowImage}
                                            style={{
                                                filter: 'brightness(0) invert(1)',
                                                zIndex: '999',
                                                width: '15px',
                                                height: '15px'
                                            }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} xl={12}>
                                        <p>{industry.properties.description}</p>
                                    </Col>
                                </Row>
                            </SpotlightCard>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    );

};

export default MyIndustry;