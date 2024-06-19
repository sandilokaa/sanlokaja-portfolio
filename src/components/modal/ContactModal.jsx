import React, { useRef } from "react";
import {
    Modal,
    Button,
    Image,
    Form
} from "react-bootstrap";

import LogoPortfolioImage from "../../assets/images/logo-portfolio.png";

const ContactModal = ({ show, handleClose }) => {

    const nameField = useRef();
    const emailField = useRef();
    const phoneField = useRef();
    const questionField = useRef();

    const handleSendMessage = () => {

        const payloadMessage = {
            name: nameField.current.value,
            email: emailField.current.value,
            phone: phoneField.current.value,
            qeustion: questionField.current.value
        };

        const message = `Name: ${payloadMessage.name}%0aEmail: ${payloadMessage.email}%0aPhone: ${payloadMessage.phone}%0aQuestion: ${payloadMessage.qeustion}`;

        const whatsappUrl = `https://web.whatsapp.com/send?phone=6285934920467&text=${message}`;

        window.open(whatsappUrl, "_blank");

    };

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ border: 'none' }}>
                <Modal.Title>
                    <Image src={LogoPortfolioImage} />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <h1 style={{ fontSize: '30px', fontWeight: '600' }}>Interested in creating a website? I'm happy to have you</h1>
                    <p style={{marginTop: '3%'}}>Let's bring your vision to life with a stunning and functional website tailored to your needs.</p>
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameField}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" ref={emailField}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" ref={phoneField}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>How can i'm help you?</Form.Label>
                            <Form.Control as="textarea" rows={3} ref={questionField}/>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ border: 'none' }}>
                <Button onClick={handleSendMessage} className="w-100" style={{ backgroundColor: '#171717', border: '#171717 1px solid', fontWeight: '600', padding: '2%' }}>
                    Get started
                </Button>
                <p style={{ margin: '5% auto 2%' }}>Prefer email? <span style={{ fontWeight: '600', textDecoration: 'underline' }}>sandyloka790@gmail.com</span></p>
            </Modal.Footer>
        </Modal>

    );

};

export default ContactModal;