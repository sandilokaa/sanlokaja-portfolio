import React from "react";
import {
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";

import LogoFooter from "../../assets/images/logo-2.png";
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineWhatsApp,
    AiOutlineMail
} from "react-icons/ai";

const FooterGeneral = () => {

    return (

        <div id="footer">
            <Container>
                <Row>
                    <Col xs={12} xl={4} className="d-flex align-items-center">
                        <Image src={LogoFooter} />
                    </Col>
                    <Col xs={12} xl={{ span: 3, offset: 5 }} className="d-flex justify-content-end align-items-center">
                        <AiOutlineInstagram
                            style={{
                                color: '#000000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: '40px',
                                padding: '2%'
                            }}
                        />
                        <AiOutlineTwitter
                            style={{
                                color: '#000000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: '40px',
                                padding: '2%'
                            }}
                        />
                        <AiOutlineWhatsApp
                            style={{
                                color: '#000000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: '40px',
                                padding: '2%'
                            }}
                        />
                        <AiOutlineMail
                            style={{
                                color: '#000000',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                fontSize: '40px',
                                padding: '2%'
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xl={4}>
                        <p>
                            I am committed to providing the best web solutions. Contact us to start designing your dream website.
                        </p>
                    </Col>
                    <Col xs={12} xl={{ span: 3, offset: 5 }} className="d-flex justify-content-end">
                        <p>
                            ©2024 - Sandi Loka Copyright <br /> All Rights Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );

};

export default FooterGeneral;