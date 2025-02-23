import React, { useState } from "react";
import {
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";

import ArrowIcon from "../../assets/images/icons/arrow.svg";
import ReactJSImage from "../../assets/images/services/reactjs-image.png";
import NuxtJSImage from "../../assets/images/services/nuxtjs-image.png";
import TailwindImage from "../../assets/images/services/tailwind-image.png";
import CSSImage from "../../assets/images/services/css-image.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const FrontendDevService = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

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
        setIsHovered4(false);
    };

    const handleMouseMove2 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(false);
        setIsHovered2(true);
        setIsHovered3(false);
        setIsHovered4(false);
    };

    const handleMouseMove3 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(true);
        setIsHovered4(false);
    };

    const handleMouseMove4 = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        api.start({ x: mouseX, y: mouseY, opacity: 1 });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(false);
        setIsHovered4(true);
    };

    const handleMouseLeave = () => {
        api.start({ opacity: 0 });
        setIsHovered1(false);
        setIsHovered2(false);
        setIsHovered3(false);
        setIsHovered4(false);
    };

    return (

        <>
            <h4>Frontend Dev</h4>
            <Row className="my-service-detail-tech">
                <Col xs={6} xl={3}>
                    <Button>
                        ReactJs
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        NextJs
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        Tailwind
                    </Button>
                </Col>
                <Col xs={6} xl={3}>
                    <Button>
                        Other
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
                            <h5>ReactJs</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                ReactJS facilitates creating interactive, responsive UIs with good performance,
                                backed by major companies, thanks to its component-based approach,
                                Virtual DOM, JSX, and strong community support.
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
                                    backgroundImage: `url(${ReactJSImage})`,
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
                            <h5>NextJs</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                NextJs on the frontend enables fast, efficient, and scalable web app
                                development with SSR, automatic routing, code splitting, middleware,
                                plugins, and comprehensive documentation.
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
                                    backgroundImage: `url(${NuxtJSImage})`,
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
                            <h5>Tailwind</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                Tailwind CSS on the frontend facilitates fast, responsive UI development
                                with its utility-first approach, easy configuration, and rich ecosystem,
                                eliminating the need for custom CSS.
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
                                    backgroundImage: `url(${TailwindImage})`,
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
                        onMouseMove={handleMouseMove4}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Col xs={12} xl={3}>
                            <h5>Other</h5>
                        </Col>
                        <Col xs={10} xl={8}>
                            <p>
                                HTML5 and CSS3 empower modern, responsive, and dynamic UI development
                                with features like multimedia elements, gradients, animations,
                                and responsive design, enhancing user experiences on the web.
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
                        {isHovered4 && (
                            <animated.div
                                className="mouse-follower"
                                style={{
                                    backgroundImage: `url(${CSSImage})`,
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

export default FrontendDevService;