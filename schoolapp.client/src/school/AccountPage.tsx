import React, { useState } from 'react';
import { Container, Card, Form, Button, FormLabel, Row, Col } from 'react-bootstrap';

export const Account = () => {
    const [showContactCard, setShowContactCard] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [address, setAddress] = useState('Address line 1\nAddress line 2\nAddress line 3\nAddress line 4');
    const [phone, setPhone] = useState('00-000-00-00');
    const [email, setEmail] = useState('anita@szuklow.com');

    const [editing, setEditing] = useState({
        address: false,
        phone: false,
        email: false,
    });

    const handleCorrectAddressClick = () => {
        setEditing({ ...editing, address: true });
    };

    const handleCorrectPhoneClick = () => {
        setEditing({ ...editing, phone: true });
    };

    const handleCorrectEmailClick = () => {
        setEditing({ ...editing, email: true });
    };

    const handleConfirmButtonClick = () => {
        setShowContactCard(true);
        setShowForm(false);
        setShowConfirmation(true);
        setEditing({ address: false, phone: false, email: false });
    };

    const handleTextAreaChange = (e, setter) => {
        setter(e.target.value);
    };

    return (
        <Container className="myContainer">
            <Container>
                <Col >
                <Card className="text-center mb-3">
                    <Card.Header>Account owner</Card.Header>
                    <Card.Body className="card-body4">
                        <Card.Text>Mrs. Anita Szuklow</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col> </Col>
            </Container>

            <Container>
                <Row className="mb-3">
                    <Col >
                        <Card className="text-center">
                            <Card.Header>Address</Card.Header>
                            <Card.Body className="card-body4">
                                {editing.address ? (
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={address}
                                        onChange={(e) => handleTextAreaChange(e, setAddress)}
                                    />
                                ) : (
                                    <Card.Text>
                                        {address.split('\n').map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-end">
                        {editing.address ? (
                            <Button variant="primary" onClick={() => setEditing({ ...editing, address: false })} className="custom-button1">Confirm</Button>
                        ) : (
                            <Button variant="primary" onClick={handleCorrectAddressClick} className="custom-button1">Correct</Button>
                        )}
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col >
                        <Card className="text-center">
                            <Card.Header>Phone no.</Card.Header>
                            <Card.Body className="card-body4">
                                {editing.phone ? (
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={phone}
                                        onChange={(e) => handleTextAreaChange(e, setPhone)}
                                    />
                                ) : (
                                    <Card.Text>
                                        <p>Phone: {phone}</p>
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-end">
                        {editing.phone ? (
                            <Button variant="primary" onClick={() => setEditing({ ...editing, phone: false })} className="custom-button1">Confirm</Button>
                        ) : (
                            <Button variant="primary" onClick={handleCorrectPhoneClick} className="custom-button1">Correct</Button>
                        )}
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col >
                        <Card className="text-center">
                            <Card.Header>E-mail</Card.Header>
                            <Card.Body className="card-body4">
                                {editing.email ? (
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={email}
                                        onChange={(e) => handleTextAreaChange(e, setEmail)}
                                    />
                                ) : (
                                    <Card.Text>
                                        <p>Email: {email}</p>
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-end">
                        {editing.email ? (
                            <Button variant="primary" onClick={() => setEditing({ ...editing, email: false })} className="custom-button1">Confirm</Button>
                        ) : (
                            <Button variant="primary" onClick={handleCorrectEmailClick} className="custom-button1">Correct</Button>
                        )}
                    </Col>
                </Row>
            </Container>

            {showForm && (
                <Container>
                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="primary" onClick={handleConfirmButtonClick} className="custom-button1">Confirm</Button>
                    </div>
                </Container>
            )}

            <Container>
                {showConfirmation && (
                    <div className="d-flex justify-content-center mt-3">
                        <p> </p>
                        <FormLabel>Contact details are updated.</FormLabel>
                    </div>
                )}
            </Container>
        </Container>
    );
};
