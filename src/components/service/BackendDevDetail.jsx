import React, { useState } from "react";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";

import ArrowIcon from "../../assets/images/icons/arrow.svg";
import NodeJsImage from "../../assets/images/services/nodejs.png";
import GolangImage from "../../assets/images/services/golang.png";
import DatabaseImage from "../../assets/images/services/database.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const BackendDevService = () => {

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
            <h4>Backend Dev</h4>
            <Row className="my-service-detail-tech">
                <Col xs={6} xl={3}>
                    <Button>
                        Javascript
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        Golang
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        SQL/NoSQL
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
                            <h5>Javascript</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                JavaScript with Node.js and Express.js on the backend allows fast
                                web server development, simplifying routing, middleware,
                                request/response, database access, and RESTful API creation.
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
                                    backgroundImage: `url(${NodeJsImage})`,
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
                            <h5>Golang</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                Golang with GORM in the backend allows for efficient server app development,
                                combining high performance and concurrency with a user-friendly interface
                                for relational databases.
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
                                    backgroundImage: `url(${GolangImage})`,
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
                            <h5>SQL/NoSQL</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                SQL and NoSQL facilitate flexible and efficient app development.
                                SQL suits complex transactions and high security, while NoSQL
                                fits scalable and flexible schemas.
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
                                    backgroundImage: `url(${DatabaseImage})`,
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

export default BackendDevService;