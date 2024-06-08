import React, { useState } from "react";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

import ArrowIcon from "../../assets/images/arrow.svg";
import NodeJsImage from "../../assets/images/nodejs.png";
import GolangImage from "../../assets/images/golang.png";
import DatabaseImage from "../../assets/images/database.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const BackendDevService = () => {

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
                                The use of JavaScript on the backend with Node.js and Express.js enables the development 
                                of fast and efficient web servers. With Express.js, you can easily create routing, 
                                middleware, handle requests and responses, access databases, and develop RESTful APIs.
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
                                    backgroundImage: `url(${NodeJsImage})`,
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
                            <h5>Golang</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                The use of Golang and GORM in the backend enables the development of efficient and robust 
                                server applications. Golang is known for its high performance and strong concurrency 
                                capabilities, while GORM provides an easy-to-use interface for interacting with relational databases.
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
                                    backgroundImage: `url(${GolangImage})`,
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
                            <h5>SQL/NoSQL</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                The use of SQL and NoSQL facilitates the development of applications 
                                in a flexible and efficient manner. SQL is more suitable for applications 
                                with complex transactions and high data security, while NoSQL is better suited for 
                                applications requiring horizontal scalability and schema flexibility.
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
                                    backgroundImage: `url(${DatabaseImage})`,
                                    position: 'absolute',
                                    left: mousePosition.x - 140/2,
                                    top: mousePosition.y - 140/2,
                                    width: '140px',
                                    height: '140px',
                                    borderRadius: '50%',
                                    backgroundColor: 'blue',
                                    pointerEvents: 'none',
                                    zIndex: '0',
                                    animation: 'grow 0.5s forwards',
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

export default BackendDevService;