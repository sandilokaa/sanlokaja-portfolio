import React, { useRef } from "react";
import {
    Row,
    Col
} from "react-bootstrap";

import { RiArrowDropDownLine } from 'react-icons/ri';

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {

    const contentHeight = useRef();

    return (
        <div className="wrapper">
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                <Row>
                    <Col xs={10} xl={10} className="d-flex justify-content-start">
                        <p style={{margin: 'auto 0'}} className='question-content'>{question}</p>
                    </Col>
                    <Col xs={2} xl={2} className="d-flex justify-content-end align-items-center">
                        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
                    </Col>
                </Row>
            </button>

            <Row>
                <Col xs={12} xl={12}>
                    <div ref={contentHeight} className="answer-container" style={
                        isOpen
                            ? { height: contentHeight.current.scrollHeight }
                            : { height: "0px" }
                    }>
                        <p className="answer-content">{answer}</p>
                    </div>
                </Col>
            </Row>
        </div>

    );

};

export default AccordionItem;