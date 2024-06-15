import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, FormLabel, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';
import { useState } from 'react';

export const NewMessage = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleButtonClick = () => {
        setShowConfirmation(true);
    };
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>
                        <Nav className="justify-content-left" activeKey="/">
                            <Nav.Link>
                                <Link to="/mail" className="d-block">
                                    <Button variant="primary" className="custom-button1">Back</Button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <p> </p>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Choose the recipient</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Choose</option>
                            <option value="1">Mrs. Zefi (English language)</option>
                            <option value="2">Ms. Vergara (Spanish language)</option>
                            <option value="3">Mr. Thompson (Mathematics)</option>
                            <option value="4">Mr. Darwin (Biology)</option>
                            <option value="5">Ms. Marco-Polo (Geography)</option>
                            <option value="6">Mrs. Curie (Physics)</option>
                            <option value="7">Mr. Messi (PE)</option>
                            <option value="8">Ms. Lempicka (Arts)</option>
                            <option value="9">Mr. Tiger (the Principal)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="email" placeholder="Enter your subject here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Container>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" size="lg" onClick={handleButtonClick} className="custom-button1">Send</Button>
            </div>
            <Container>
                {showConfirmation && (
                    <div className="d-flex justify-content-center mt-3">
                        <p> </p>
                        <FormLabel>Your messege was sent to the teacher.</FormLabel>
                    </div>
                )}
            </Container>

        </Container>
    )
} 