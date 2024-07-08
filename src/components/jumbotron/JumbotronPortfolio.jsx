import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";

import JumbotronImage from "../../assets/images/backgrounds/jumbotron.png";
import ArrowIcon from "../../assets/images/icons/arrow.svg";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const JumbotronPortfolio = () => {

    /* ---------- Mouse Follower ----------*/

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        setMousePosition({ x: mouseX, y: mouseY });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    /* ---------- End Mouse Follower ----------*/

    const handleGetRepository = () => {
        window.open(`https://www.github.com/sandilokaa`, '_blank');
    };

    return (

        <Container>
            <Row
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleGetRepository}
            >
                <Col xs={12} xl={12}>
                    <Image src={JumbotronImage} style={{ width: '100%', height: 'auto' }} />
                </Col>
                {isHovered && (
                    <div
                        className="mouse-follower"
                        style={{
                            backgroundColor: '#D5FF3F',
                            position: 'absolute',
                            left: window.innerWidth < 576 ? mousePosition.x - 90 / 2 : mousePosition.x - 180 / 2,
                            top: window.innerWidth < 576 ? mousePosition.y - 90 / 2 : mousePosition.y - 180 / 2,
                            width: window.innerWidth < 576 ? '90px' : '180px',
                            height: window.innerWidth < 576 ? '90px' : '180px',
                            borderRadius: '50%',
                            pointerEvents: 'none',
                            zIndex: '0',
                            animation: 'grow 0.4s forwards',
                            transition: 'left 0.1s, top 0.1s'
                        }}
                    >
                        <Row style={
                            {
                                fontWeight: '600',
                                marginTop: window.innerWidth < 576 ? '10%' : '20%',
                                marginLeft: window.innerWidth < 576 ? '55%' : '60%'
                            }}
                        >
                            <Col xs={12} xl={12}>
                                <Image src={ArrowIcon} style={{ height: window.innerWidth < 576 ? '10px' : 'auto' }} />
                            </Col>
                        </Row>
                        <Row style={
                            {
                                fontWeight: '600',
                                marginTop: window.innerWidth < 576 ? '35%' : '40%',
                                marginLeft: window.innerWidth < 576 ? '-20%' : '5%',
                                fontSize: window.innerWidth < 576 ? '11px' : '18px'
                            }}
                        >
                            <Col xs={12} xl={12}>
                                <p>My Github</p>
                            </Col>
                        </Row>
                    </div>
                )}
            </Row>
        </Container>

    );

};

export default JumbotronPortfolio;