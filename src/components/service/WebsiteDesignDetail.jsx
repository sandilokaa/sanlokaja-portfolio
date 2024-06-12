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

const WebsiteDesignService = () => {

    return (

        <>
            <h4>Website Design</h4>
            <Row className="my-service-detail-tech">
                <Col xs={6} xl={3}>
                    <Button>
                        UI Design
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        UX Design
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        UX Research
                    </Button>
                </Col>
                <div>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                    >
                        <Col xs={12} xl={3}>
                            <h5>UI Design</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                UI design encompasses the creation of visually appealing 
                                and user-friendly digital interfaces, emphasizing usability and 
                                functionality for enhanced user experience. 
                            </p>
                        </Col>
                        <Col xs={2} xl={1}>
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
                            <h5>UX Design</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                UX design is about creating digital experiences that meet user needs 
                                through intuitive, accessible, and enjoyable interactions, 
                                achieved through research, iterative design, and testing. 
                            </p>
                        </Col>
                        <Col xs={2} xl={1}>
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
                            <h5>UX Research</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                UX research entails gathering and analyzing user data to understand 
                                their behaviors, needs, and preferences, guiding the design process 
                                to create effective solutions. 
                            </p>
                        </Col>
                        <Col xs={2} xl={1}>
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

export default WebsiteDesignService;