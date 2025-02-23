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
                                    marginLeft: '15px',
                                    filter: 'brightness(0) invert(1)'
                                }}
                            />
                        </Button>
                    </div>
                </Col>
                <Col xs={12} xl={{span: 7, offset: 1}} className="cs-short-description">
                    <Row>
                        <Col xs={12} xl={12} className="description-one">
                            <p>
                                This commitment aims to support individuals and organizations in their digital journey by 
                                providing the latest and most innovative technology, in-depth training, and educational 
                                resources. With adequate technical support and customer service, users can maximize 
                                the use of technology. 
                            </p>
                        </Col>
                        <Col xs={12} xl={12} className="description-two">
                            <p>
                                Customized digital solutions are also offered, ensuring data security and privacy. 
                                This comprehensive approach ensures that every user can achieve optimal success 
                                in the rapidly evolving digital era.
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