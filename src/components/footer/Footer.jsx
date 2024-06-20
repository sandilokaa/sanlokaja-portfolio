import React, { useState } from "react";
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

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    return (

        <div id="footer">
            <Container>
                <Row>
                    <Col xs={6} xl={4} className="d-flex align-items-center">
                        <Image src={LogoFooter} />
                    </Col>
                    <Col xs={6} xl={{ span: 3, offset: 5 }} className="d-flex justify-content-end align-items-center">
                        <AiOutlineInstagram
                            style={{
                                color: hover1 ? '#FFFFFF' : '#171717',
                                backgroundColor: hover1 ? '#171717' : '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: window.innerWidth < 480 ? '30px' : '40px',
                                padding: '3%',
                                cursor: 'pointer',
                                transition: '0.3s all ease-in-out'
                            }}
                            onMouseEnter={() => setHover1(true)}
                            onMouseLeave={() => setHover1(false)}
                        />
                        <AiOutlineTwitter
                            style={{
                                color: hover2 ? '#FFFFFF' : '#171717',
                                backgroundColor: hover2 ? '#171717' : '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: window.innerWidth < 480 ? '30px' : '40px',
                                padding: '3%',
                                cursor: 'pointer',
                                transition: '0.3s all ease-in-out'
                            }}
                            onMouseEnter={() => setHover2(true)}
                            onMouseLeave={() => setHover2(false)}
                        />
                        <AiOutlineWhatsApp
                            style={{
                                color: hover3 ? '#FFFFFF' : '#171717',
                                backgroundColor: hover3 ? '#171717' : '#FFFFFF',
                                borderRadius: '20px',
                                marginRight: '6%',
                                fontSize: window.innerWidth < 480 ? '30px' : '40px',
                                padding: '3%',
                                cursor: 'pointer',
                                transition: '0.3s all ease-in-out'
                            }}
                            onMouseEnter={() => setHover3(true)}
                            onMouseLeave={() => setHover3(false)}
                        />
                        <AiOutlineMail
                            style={{
                                color: hover4 ? '#FFFFFF' : '#171717',
                                backgroundColor: hover4 ? '#171717' : '#FFFFFF',
                                borderRadius: '20px',
                                fontSize: window.innerWidth < 480 ? '30px' : '40px',
                                padding: '3%',
                                cursor: 'pointer',
                                transition: '0.3s all ease-in-out'
                            }}
                            onMouseEnter={() => setHover4(true)}
                            onMouseLeave={() => setHover4(false)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xl={4}>
                        <p>
                            I am committed to providing the best web solutions. Contact us to start designing your dream website.
                        </p>
                    </Col>
                    <Col xs={12} xl={{ span: 3, offset: 5 }} className="d-flex justify-content-end copyright">
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