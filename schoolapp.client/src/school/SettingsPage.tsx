import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Card, Form, Button, FormLabel } from 'react-bootstrap';
import { useState } from 'react';

export const Settings = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
   

    const handleButtonClick = () => {
        setShowConfirmation(true);
    };
    return (
        <Container className="myContainer">           
                <Container>
                    <Card className="text-center">
                        <Card.Header>Account settings</Card.Header>
                    <Card.Body className="card-body4">
                    <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={8}>
                                    Night mode
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={8}>
                                    Send e-mail notifications
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={8}>
                                    Allow push-up notifications
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={8}>
                                    Allow sound notifications
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={8}>
                                    Show widget on main screen
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <p></p>
            <div className="d-flex justify-content-center mt-3">
                <Button variant="primary" onClick={handleButtonClick} className="custom-button1">Apply</Button>
            </div>
            <Container>
                {showConfirmation && (
                    <div className="d-flex justify-content-center mt-3">
                        <p> </p>
                        <FormLabel>Changes applied.</FormLabel>
                    </div>
                )}
            </Container>

        </Container>

    )
} 