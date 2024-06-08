import React, { useState } from "react";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

import ArrowIcon from "../../assets/images/arrow.svg";
import UIUXImage from "../../assets/images/uiux-image.png";
import FrontEndImage from "../../assets/images/frontend-image.png";
import BackEndImage from "../../assets/images/backend-image.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const FullstackDevService = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    const handleMouseMove1 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; 
        const mouseY = event.clientY - rect.top; 
        setMousePosition({ x: mouseX, y: mouseY });
        setIsHovered1(true);
        setIsHovered2(false);
        setIsHovered3(false);
    };

    const handleMouseMove2 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; 
        const mouseY = event.clientY - rect.top; 
        setMousePosition({ x: mouseX, y: mouseY });
        setIsHovered1(false);
        setIsHovered2(true);
        setIsHovered3(false);
    };

    const handleMouseMove3 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; 
        const mouseY = event.clientY - rect.top; 
        setMousePosition({ x: mouseX, y: mouseY });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(true);
    };

    const handleMouseLeave = () => {
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
                                The frontend development process involves steps starting from requirement analysis, 
                                user interface design, technology selection, to code development and testing. 
                                Frontend developers collaborate with UI/UX designers and other team members 
                                to create responsive, engaging, and high-performing user interfaces. 
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
                            <div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${FrontEndImage})`,
                                    position: 'absolute',
                                    left: mousePosition.x - 140/2,
                                    top: mousePosition.y - 140/2,
                                    width: '140px',
                                    height: '140px',
                                    borderRadius: '50%',
                                    backgroundColor: 'blue',
                                    pointerEvents: 'none',
                                    zIndex: '0',
                                    animation: 'grow 0.4s forwards',
                                    transition: 'left 0.1s, top 0.1s'
                                }}
                            ></div>
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
                                The backend development process involves requirement analysis, architecture planning, 
                                API development, implementation of business functionalities, testing, optimization, 
                                and maintenance. Backend developers work to create infrastructure that supports applications 
                                or websites, ensuring optimal performance, security, and scalability. 
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
                            <div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${BackEndImage})`,
                                    position: 'absolute',
                                    left: mousePosition.x - 140/2,
                                    top: mousePosition.y - 140/2,
                                    width: '140px',
                                    height: '140px',
                                    borderRadius: '50%',
                                    backgroundColor: 'blue',
                                    pointerEvents: 'none',
                                    zIndex: '0',
                                    animation: 'grow 0.4s forwards',
                                    transition: 'left 0.1s, top 0.1s'
                                }}
                            ></div>
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
                                The UI/UX design process involves user research, creating personas and user journeys, wireframing, 
                                visual design, prototyping, user testing, design implementation, and maintenance. 
                                UI/UX designers focus on creating optimal user experiences through a combination of research, 
                                creativity, and iteration.
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
                            <div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${UIUXImage})`,
                                    position: 'absolute',
                                    left: mousePosition.x - 140/2,
                                    top: mousePosition.y - 140/2,
                                    width: '140px',
                                    height: '140px',
                                    borderRadius: '50%',
                                    backgroundColor: 'blue',
                                    pointerEvents: 'none',
                                    zIndex: '0',
                                    animation: 'grow 0.4s forwards',
                                    transition: 'left 0.1s, top 0.1s'
                                }}
                            ></div>
                        )}
                    </Row>

                </div>
            </Row>
        </>

    );
};

export default FullstackDevService;