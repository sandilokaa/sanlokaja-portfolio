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

const FrontendDevService = () => {

    return (

        <>
            <h4>Front Dev</h4>
            <Row className="my-service-detail-tech">
                <Col xs={12} xl={3}>
                    <Button>
                        ReactJs
                    </Button>
                </Col>
                <Col xs={12} xl={3}>
                    <Button>
                        NuxtJs
                    </Button>
                </Col>
                <Col xs={12} xl={3}>
                    <Button>
                        Tailwind
                    </Button>
                </Col>
                <Col xs={12} xl={3}>
                    <Button>
                        Other
                    </Button>
                </Col>
                <div>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                    >
                        <Col xs={12} xl={3}>
                            <h5>ReactJs</h5>
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
                            <h5>NuxtJs</h5>
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
                            <h5>Tailwind</h5>
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
                            <h5>Other</h5>
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

export default FrontendDevService;