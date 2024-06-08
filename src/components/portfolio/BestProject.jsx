import React from "react";
import {
    Row,
    Col,
    Container,
    Button
} from "react-bootstrap";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const BestProject = () => {

    return (

        <Container>
            <Row>
                <Col xs={12} xl={8}>
                    <h1>BEST PROJECT <div className="round-best-project"></div></h1>
                </Col>
                <Col xs={12} xl={4}>
                    <p>Creative fuels code, code fuels creativity, be here for more, are you in love with a creative?</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} xl={2}>
                    <Button className="w-100">
                        Fullstack Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button className="w-100">
                        BackEnd Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button className="w-100">
                        FrontEnd Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button className="w-100">
                        UI UX Design
                    </Button>
                </Col>
                <Col xs={6} xl={4} className="d-flex justify-content-end align-items-center">
                    <div className="round-my-best-project"></div>
                    <div className="round-my-best-project"></div>
                    <div className="round-my-best-project"></div>
                </Col>
            </Row>
        </Container>

    );

};

export default BestProject;