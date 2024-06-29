import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";

import ArrowExample from "../../assets/images/icons/arrow-project.png";

import { ProjectData } from "../../assets/js/projectData";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const BestProject = () => {

    /* ---------- Selected Project Button ----------*/

    const [selectedProjectButton, setSelectedProjectButton] = useState(null);

    useEffect(() => {
        if (selectedProjectButton === null) {
            setSelectedProjectButton('Fullstack Dev');
        }
    }, [selectedProjectButton]);

    const showProjectDetail = (projectName) => {
        setSelectedProjectButton(projectName);
    };

    /* ---------- End Selected Project Button ----------*/

    const filteredProjects = ProjectData.Collections.filter(project => project.type === selectedProjectButton);

    return (

        <Container>
            <Row>
                <Col xs={12} xl={8}>
                    <h1>BEST PROJECT <div className="round-best-project"></div></h1>
                </Col>
                <Col xs={12} xl={4}>
                    <p>Creative fuels code, code fuels creativity, be here for more, are you in love with a creative?</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} xl={2}>
                    <Button
                        onClick={() => showProjectDetail('Fullstack Dev')}
                        className={selectedProjectButton === 'Fullstack Dev' ? 'active' : ''}
                    >
                        Fullstack Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button
                        onClick={() => showProjectDetail('BackEnd Dev')}
                        className={selectedProjectButton === 'BackEnd Dev' ? 'active' : ''}
                    >
                        BackEnd Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button
                        onClick={() => showProjectDetail('FrontEnd Dev')}
                        className={selectedProjectButton === 'FrontEnd Dev' ? 'active' : ''}
                    >
                        FrontEnd Dev
                    </Button>
                </Col>
                <Col xs={6} xl={2}>
                    <Button
                        onClick={() => showProjectDetail('UI UX Design')}
                        className={selectedProjectButton === 'UI UX Design' ? 'active' : ''}
                    >
                        UI UX Design
                    </Button>
                </Col>
                <Col xs={12} xl={4} className="d-flex justify-content-end align-items-center round-project">
                    <div className="round-my-best-project"></div>
                    <div className="round-my-best-project"></div>
                    <div className="round-my-best-project"></div>
                </Col>
            </Row>
            {filteredProjects.map((project) => (
                <Row key={project.id}>
                    {project.properties.map((bestProject) => (

                        <Col xs={12} xl={bestProject.id === 2 ? 8 : 4} className="mt-4" key={bestProject.id}>
                            <div className="overlay-container" style={{ borderRadius: bestProject.id === 5 ? '0 0 30% 0' : '0' }}>
                                <Image src={bestProject.image} style={{ width: '100%', height: '100%' }} />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <Row>
                                            <Col xs={12} xl={12} className="d-flex justify-content-end">
                                                <Image src={ArrowExample} style={{ position: 'absolute', width: '80px', right: '0', top: '0' }} />
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: bestProject.id === 2 ? '22%' : '45%' }}>
                                            <Col xs={12} xl={12}>
                                                <p>{bestProject.year}</p>
                                            </Col>
                                            <Col xs={12} xl={12}>
                                                <p style={{ fontSize: '36px', fontWeight: '600' }}>{bestProject.title}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>

    );

};

export default BestProject;