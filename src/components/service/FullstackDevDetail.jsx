import React from "react";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

import ArrowIcon from "../../assets/images/arrow.svg";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const FullstackDevService = () => {

    return (

        <>
            <h4>Fullstack Dev</h4>
            <Row className="my-service-detail-tech">
                <Col xs={12} xl={3}>
                    <Button>
                        Frontend Dev
                    </Button>
                </Col>
                <Col xs={12} xl={3}>
                    <Button>
                        Backend Dev
                    </Button>
                </Col>
                <Col xs={12} xl={3}>
                    <Button>
                        UI UX Design
                    </Button>
                </Col>

                <div>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                    >
                        <Col xs={12} xl={3}>
                            <h5>Frontend Dev</h5>
                        </Col>
                        <Col xs={12} xl={8}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </Col>
                        <Col xs={12} xl={1}>
                            <Image
                                src={ArrowIcon}
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                    float: 'right',
                                    zIndex: '999'
                                }}
                            />
                        </Col>
                    </Row>

                    <hr />

                    <Row 
                        className="my-service-detail-tech-description"
                    >
                        <Col xs={12} xl={3}>
                            <h5>Backend Dev</h5>
                        </Col>
                        <Col xs={12} xl={8}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </Col>
                        <Col xs={12} xl={1}>
                            <Image
                                src={ArrowIcon}
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                    float: 'right',
                                    zIndex: '999'
                                }}
                            />
                        </Col>
                    </Row>

                    <hr />

                    <Row 
                        className="my-service-detail-tech-description"
                    >
                        <Col xs={12} xl={3}>
                            <h5>UI UX Design</h5>
                        </Col>
                        <Col xs={12} xl={8}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </Col>
                        <Col xs={12} xl={1}>
                            <Image
                                src={ArrowIcon}
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                    float: 'right',
                                    zIndex: '999'
                                }}
                            />
                        </Col>
                    </Row>

                </div>
            </Row>
        </>

    );
};

export default FullstackDevService;