import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

import ArrowIcon from "../../assets/images/icons/arrow.svg";
import UIUXImage from "../../assets/images/services/uiux-image.png";
import FrontEndImage from "../../assets/images/services/frontend-image.png";
import BackEndImage from "../../assets/images/services/backend-image.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const FullstackDevService = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    const [{ x, y, opacity }, api] = useSpring(() => ({
        x: 0,
        y: 0,
        opacity: 0,
        config: { tension: 200, friction: 20 },
    }));

    const handleMouseMove1 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(true);
        setIsHovered2(false);
        setIsHovered3(false);
    };

    const handleMouseMove2 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(false);
        setIsHovered2(true);
        setIsHovered3(false);
    };

    const handleMouseMove3 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(true);
    };

    const handleMouseLeave = () => {
        api.start({ opacity: 0 });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(false);
    };

    return (

        <>
            <h4>Fullstack Dev</h4>
            <Row className="my-service-detail-tech">
                <Col xs={6} xl={3}>
                    <Button>
                        Frontend Dev
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        Backend Dev
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        UI UX Design
                    </Button>
                </Col>

                <div>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                        onMouseMove={handleMouseMove1}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Col xs={12} xl={3}>
                            <h5>Frontend Dev</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                The frontend development process includes requirement analysis, UI design,
                                technology selection, coding, and testing. Frontend developers work with
                                UI/UX designers to high-performing user interfaces.
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
                        {isHovered1 && (
                            <animated.div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${FrontEndImage})`,
                                    position: "absolute",
                                    left: x.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    top: y.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    width: window.innerWidth < 576 ? "90px" : "140px",
                                    height: window.innerWidth < 576 ? "90px" : "140px",
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
                            />
                        )}
                    </Row>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                        onMouseMove={handleMouseMove2}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Col xs={12} xl={3}>
                            <h5>Backend Dev</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                Backend development includes requirement analysis, architecture planning,
                                API development, testing, optimization, and maintenance,
                                ensuring performance, security, and scalability.
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
                        {isHovered2 && (
                            <animated.div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${BackEndImage})`,
                                    position: "absolute",
                                    left: x.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    top: y.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    width: window.innerWidth < 576 ? "90px" : "140px",
                                    height: window.innerWidth < 576 ? "90px" : "140px",
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
                            />
                        )}
                    </Row>

                    <hr />

                    <Row
                        className="my-service-detail-tech-description"
                        onMouseMove={handleMouseMove3}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Col xs={12} xl={3}>
                            <h5>UI UX Design</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                The UI/UX design process includes user research, personas, wireframing,
                                visual design, prototyping, user testing, implementation, and maintenance,
                                focusing on optimal user experiences.
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
                        {isHovered3 && (
                            <animated.div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${UIUXImage})`,
                                    position: "absolute",
                                    left: x.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    top: y.to((val) => `${val - (window.innerWidth < 576 ? 45 : 90)}px`),
                                    width: window.innerWidth < 576 ? "90px" : "140px",
                                    height: window.innerWidth < 576 ? "90px" : "140px",
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
                            />
                        )}
                    </Row>

                </div>
            </Row>
        </>

    );
};

export default FullstackDevService;