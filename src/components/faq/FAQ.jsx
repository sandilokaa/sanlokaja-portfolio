import React, { useState } from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";

import AccordionItem from "./Accordion";
import { AccordionData } from "../../assets/js/accordionData";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const FAQContent = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (

        <Container>
            <Row>
                <Col xs={12} xl={5}>
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </Col>
                <Col xs={12} xl={{ span: 6, offset: 1 }}>
                    {AccordionData.Collections.map((item) => {
                        return (
                            <AccordionItem
                                key={item.id}
                                question={item.properties.question}
                                answer={item.properties.answer}
                                isOpen={activeIndex === item}
                                onClick={() => handleItemClick(item)}
                            />
                        )
                    })}
                </Col>
            </Row>
        </Container>

    );

};

export default FAQContent;