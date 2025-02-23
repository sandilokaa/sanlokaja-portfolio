import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
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

    const [isHovered, setIsHovered] = useState(false);

    const [{ x, y, opacity }, api] = useSpring(() => ({
        x: 0,
        y: 0,
        opacity: 0,
        config: { tension: 200, friction: 20 },
    }));

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        api.start({ opacity: 0 });
        setIsHovered(false);
    };

    /* ---------- End Mouse Follower ---------- */

    const handleGetRepository = () => {
        window.open(`https://www.github.com/sandilokaa`, "_blank");
    };

    return (
        <Container>
            <Row
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleGetRepository}
                style={{ position: "relative" }}
            >
                <Col xs={12} xl={12}>
                    <Image src={JumbotronImage} style={{ width: "100%", height: "auto" }} />
                </Col>
                {isHovered && (
                    <animated.div
                        className="mouse-follower"
                        style={{
                            position: "absolute",
                            left: x.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                            top: y.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                            width: window.innerWidth < 576 ? "90px" : "180px",
                            height: window.innerWidth < 576 ? "90px" : "180px",
                            backgroundColor: "#101010",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            zIndex: "10",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity,
                            cursor: 'pointer'
                        }}
                    >
                        <div className="d-flex flex-column">
                            <Row style={{ fontWeight: "600", marginLeft: '80px', marginTop: '10px' }}>
                                <Col xs={12} xl={12}>
                                    <Image src={ArrowIcon} style={{ height: window.innerWidth < 576 ? "10px" : "auto", filter: 'brightness(0) invert(1)' }} />
                                </Col>
                            </Row>
                            <Row
                                style={{
                                    fontWeight: "600",
                                    marginTop: "60px",
                                    fontSize: window.innerWidth < 576 ? "11px" : "18px",
                                }}
                            >
                                <Col xs={12} xl={12}>
                                    <p className="text-white">My Github</p>
                                </Col>
                            </Row>
                        </div>
                    </animated.div>
                )}
            </Row>
        </Container>
    );
};

export default JumbotronPortfolio;