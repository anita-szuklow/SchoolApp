import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, FormLabel, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Message = () => {
    const [showTextarea, setShowTextarea] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [messageDeleted, setMessageDeleted] = useState(false);

    const handleButtonClick = () => {
        setShowTextarea(true);
        setShowButton(true);
    };

    const handleSendButtonClick = () => {
        setShowTextarea(false);
        setShowButton(false);
        setShowConfirmation(true);
    };

    const handleDeleteButtonClick = () => {
        setMessageDeleted(true);
        setShowTextarea(false);
        setShowButton(false);
        setShowConfirmation(false);
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
                {!messageDeleted ? (
                    <Card className="myCard">
                        <Card.Header as="h5" className="card-header3">Date: 10/05/2024, From: Mrs. Zefi</Card.Header>
                        <Card.Body className="card-body3">
                            <Card.Title className="card-title1">Information before the trip to the ZOO</Card.Title>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <Card className="myCard">
                        <Card.Body className="card-body3">
                            <Card.Text>
                                This message has been deleted.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Container>
            <Container className="d-flex justify-content-center mt-3">
                {!messageDeleted && (
                    <Row>
                        <Col>
                            <Button variant="primary" size="lg" onClick={handleButtonClick} className="custom-button1">Reply</Button>
                        </Col>
                        <Col>
                            <Button variant="primary" size="lg" onClick={handleDeleteButtonClick} className="custom-button1">Delete</Button>
                        </Col>
                    </Row>
                )}
            </Container>
            <Container>
                {showTextarea && !messageDeleted && (
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="email" defaultValue="RE: Information before the trip to the ZOO" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                )}
                {showButton && !messageDeleted && (
                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="primary" onClick={handleSendButtonClick} className="custom-button1">Send</Button>
                    </div>
                )}
                {showConfirmation && !messageDeleted && (
                    <div className="d-flex justify-content-center mt-3">
                        <FormLabel>Your message was sent to the teacher.</FormLabel>
                    </div>
                )}
            </Container>
        </Container>
    );
};
