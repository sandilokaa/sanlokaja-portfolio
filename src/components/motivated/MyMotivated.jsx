import React from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";

import MotivationImage1 from "../../assets/images/motivation-1.png";
import MotivationImage2 from "../../assets/images/motivation-2.png";
import ArrowIcon from "../../assets/images/arrow-motivated.svg";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const MyMotivated = () => {

    return (

        <Container>
            <Row>
                <Col xs={12} xl={12}>
                    <h1>I AM A HIGHYLY MOTIVATED</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={12} xl={4}>
                    <h1>PERSON</h1>
                </Col>
                <Col xs={12} xl={4}>
                    <p>
                        Brings a unique set of skills, experiences, and perspective to the table, creating a dynamic.
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={12} xl={{span: 4, offset: 4}}>
                    <Button className="btn btn-motivated-contact">
                        Let’s Talk With Me
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={7}>
                    <Image src={MotivationImage1} className="w-100"/>
                    <div style={{position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <Button className="btn btn-listen-project">
                            Watch and Listen Project In Full <Image src={ArrowIcon} style={{height: '10px', width: '10px', marginLeft: '2%'}}/>
                        </Button>
                    </div>
                </Col>
                <Col xs={12} xl={5}>
                    <Image src={MotivationImage2} className="w-100"/>
                </Col>
            </Row>
        </Container>

    );

};

export default MyMotivated;