import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarComponent from '../components/CalendarComponent';
import MyCalendar from '../components/MyCalendar';
import { FormLabel, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './Styles.css';

export const Attendance = () => {

    const [showTextarea, setShowTextarea] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleButtonClick = () => {
        setShowTextarea(true);
        setShowButton(true);
    };
    const handleSendButtonClick = () => {
        setShowTextarea(false);
        setShowButton(false);
        setShowConfirmation(true)
    };

    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header-3">List of absence periods</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Excused absence periods</Form.Label>
                                        <Form.Select>
                                            <option>See list</option>
                                            <option value="1">March 27th - 31st, 2024</option>
                                            <option value="2">March 6th - 10th, 2024</option>
                                            <option value="3">February 8th - 12th, 2024</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Unexcused absence periods</Form.Label>
                                        <Form.Select>
                                            <option>Choose</option>
                                            <option value="1">May 27th - 31st, 2024</option>
                                            <option value="2">May 6th - 10th, 2024</option>
                                            <option value="3">April 8th - 12th, 2024</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>                                
                                <Col xs={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Reason for absence</Form.Label>
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Enter your reason here"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-primary" onClick={handleSendButtonClick} className="custom-button">Excuse</Button>
                                        </Form>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p> </p>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Link className="nav-link1">
                    <Link to="/attendance" className="d-block">previous</Link>
                </Nav.Link>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        May-June 2024
                    </Nav.Link>
                </Nav.Item>
                <Nav.Link className="nav-link1">
                    <Link to="/attendance" className="d-block">next</Link>
                </Nav.Link>
            </Nav>
            <div className="App">
                <header className="App-header">
                    <Container fluid="md">
                        <Row>
                            <Col>  <MyCalendar  /> </Col>
                        </Row>
                    </Container>
                </header>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={handleButtonClick} className="custom-button1">Excuse</Button>
            </div>
            <Container>           
            {showTextarea && (
                <Form>                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Reason for absence</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                    )}                
            </Container>
            {showButton && (
                <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" onClick={handleSendButtonClick} className="custom-button1">Send</Button>
                </div>
            )}
            {showConfirmation && (
                <div className="d-flex justify-content-center mt-3">
                <p> </p>
                    <FormLabel>Your messege was sent to the teacher.</FormLabel>
                </div>
            )}
        </Container>

    )
}