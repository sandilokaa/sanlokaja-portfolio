import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";

import BackendDevService from "../../components/service/BackendDevDetail";
import FrontendDevService from "../../components/service/FrontendDevDetail";
import FullstackDevService from "../../components/service/FullstackDevDetail";
import WebsiteDesignService from "../../components/service/WebsiteDesignDetail";
import ArrowIcon from "../../assets/images/arrow.svg";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const MyService = () => {

    /* ---------- Selected Service Button ----------*/

    const [selectedServiceButton, setSelectedServiceButton] = useState(null);

    useEffect(() => {
        if (selectedServiceButton === null) {
            setSelectedServiceButton('Fullstack Dev');
        }
    }, [selectedServiceButton]);

    const showServiceDetail = (serviceName) => {
        setSelectedServiceButton(serviceName);
    };

    /* ---------- End Selected Service Button ----------*/

    return (

        <Container>
            <Row>
                <Col xs={12} xl={8}>
                    <h1>MY AWESOME</h1>
                </Col>
                <Col xs={12} xl={4} className="d-flex justify-content-end">
                    <div className="round-my-awesome"></div>
                    <div className="round-my-awesome"></div>
                    <div className="round-my-awesome"></div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={12}>
                    <h1>SERVICES <div className="round-my-service"></div></h1>
                </Col>
            </Row>
            <Row className="my-service-description">
                <Col xs={12} xl={6}>
                    <p>
                        I’am lead your startup at every step of its growth, providing unparalleled personal service at every interaction.
                    </p>
                </Col>
                <Col xs={12} xl={6} className="my-service-button">
                    <Row>
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button
                                onClick={() => showServiceDetail('Fullstack Dev')}
                                className={selectedServiceButton === 'Fullstack Dev' ? 'active' : ''}
                            >
                                Fullstack Dev
                            </Button>
                        </Col>
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button
                                onClick={() => showServiceDetail('Frontend Dev')}
                                className={selectedServiceButton === 'Frontend Dev' ? 'active' : ''}
                            >
                                Frontend Dev
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button
                                onClick={() => showServiceDetail('Backend Dev')}
                                className={selectedServiceButton === 'Backend Dev' ? 'active' : ''}
                            >
                                BackendDev
                            </Button>
                        </Col>
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button
                                onClick={() => showServiceDetail('Website Design')}
                                className={selectedServiceButton === 'Website Design' ? 'active' : ''}
                            >
                                Website Design
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className="hr-service-1" />
            <Row className="my-service-detail">
                <Col xs={12} xl={3}>
                <div className="sticky">
                <Button className="btn-ba-client">
                        BECOME A CLIENT
                        <Image
                            src={ArrowIcon}
                            style={{
                                marginLeft: '15px'
                            }}
                        />
                    </Button>
                </div>
                    
                </Col>

                {selectedServiceButton && (
                    <Col xs={12} xl={{ span: 8, offset: 1 }}>
                        {selectedServiceButton === 'Fullstack Dev' && (
                            <FullstackDevService />
                        )}
                        {selectedServiceButton === 'Frontend Dev' && (
                            <FrontendDevService />
                        )}
                        {selectedServiceButton === 'Backend Dev' && (
                            <BackendDevService />
                        )}
                        {selectedServiceButton === 'Website Design' && (
                            <WebsiteDesignService />
                        )}
                    </Col>
                )}
                <hr className="hr-service-2" />
            </Row>
        </Container>

    );

};

export default MyService;