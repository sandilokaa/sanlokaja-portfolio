import React from "react";

import {
    Row,
    Col
} from "react-bootstrap";

import { WorkflowData } from "../../assets/js/workflowData";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Workflow = () => {

    return (

        <Row className="cs-workflow">
            <Col xs={12} xl={{ span: 7, offset: 4 }} className="d-flex" style={{flexDirection: window.innerWidth < 896 ? 'column' : 'row'}}> 
                {WorkflowData.Collections.map((workflow) => {
                    return (
                        <Col xs={12} xl={3} key={workflow.id} style={{marginRight: '2%', marginTop: window.innerWidth < 896 ? '4%' : null}}>
                            <p>{workflow.type}</p>
                            <Row className="mt-3">
                                {workflow.properties.map((detail) => {
                                    return (
                                        <Col xs={12} xl={12} key={detail.id} className="mt-2">
                                            <p style={{ background: '#292929', textAlign: 'center', borderRadius: '40px', padding: '3%', fontSize: '16px' }}>{detail.title}</p>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    )
                })}
            </Col>
        </Row>

    );

};

export default Workflow;