import React from "react";

import {
    Row,
    Col
} from "react-bootstrap";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Workflow = () => {

    return (

        <Row className="cs-workflow">
            <Col xs={12} xl={{ span: 2, offset: 4 }}>
                <p>FrontEnd Dev</p>
                <Row>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>UI UX Design</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>Responsive Design</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} xl={{ span: 2, offset: 0 }}>
                <p>BackEnd Dev</p>
                <Row>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>Server-Side Logic</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '40px', padding: '3%', fontSize: '16px' }}>Database Management</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>API Integration</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>Security</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} xl={{ span: 2, offset: 0 }}>
                <p>Deployment</p>
                <Row>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '40px', padding: '3%', fontSize: '16px' }}>Continuous Deployment</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '40px', padding: '3%', fontSize: '16px' }}>Monitoring and Logging</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} xl={{ span: 2, offset: 0 }}>
                <p>Results</p>
                <Row>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>User Experience</p>
                    </Col>
                    <Col xs={12} xl={12} className="mt-4">
                        <p style={{ background: '#292929', textAlign: 'center', borderRadius: '20px', padding: '3%', fontSize: '16px' }}>Increased Reach</p>
                    </Col>
                </Row>
            </Col>
        </Row>

    );

};

export default Workflow;