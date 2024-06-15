import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

interface MailItem {
    date: string;
    from: string;
    subject: string;
}

const initialMails: MailItem[] = [
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Carpeneter-Abercrombie', subject: 'Important information concerning the next parents meeting' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' },
    { date: '10/05/2024', from: 'Mrs. Zefi', subject: 'Information before trip to the ZOO' }
];

export const Mail = () => {
    const navigate = useNavigate();
    const [mails, setMails] = useState<MailItem[]>(initialMails);
    const [selectedMails, setSelectedMails] = useState<Set<number>>(new Set());

    const handleRowClick = (path: string) => {
        navigate(path);
    };

    const handleCheckboxChange = (index: number) => {
        setSelectedMails(prevSelectedMails => {
            const newSelectedMails = new Set(prevSelectedMails);
            if (newSelectedMails.has(index)) {
                newSelectedMails.delete(index);
            } else {
                newSelectedMails.add(index);
            }
            return newSelectedMails;
        });
    };

    const handleSelectAll = () => {
        if (selectedMails.size === mails.length) {
            setSelectedMails(new Set());
        } else {
            const newSelectedMails = new Set(mails.map((_, index) => index));
            setSelectedMails(newSelectedMails);
        }
    };

    const handleDeleteSelected = () => {
        setMails(prevMails => prevMails.filter((_, index) => !selectedMails.has(index)));
        setSelectedMails(new Set());
    };

    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>
                        <Nav className="justify-content-center" activeKey="/">
                            <Nav.Link>
                                <Link to="/newmessage" className="d-block">
                                    <Button variant="primary" size="lg" className="custom-button1">New message</Button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <p> </p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header-3">Filters</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Sort by</Form.Label>
                                        <Form.Select>
                                            <option>Choose</option>
                                            <option value="1">Subject</option>
                                            <option value="2">Sender</option>
                                            <option value="3">Date asc</option>
                                            <option value="4">Date desc</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filter</Form.Label>
                                        <Form.Select>
                                            <option>Choose</option>
                                            <option value="1">Flagged</option>
                                            <option value="2">Unread</option>
                                            <option value="3">Read</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Search in mail</Form.Label>
                                            <Form className="d-flex">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Enter your query here"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-primary" className="custom-button">Search</Button>
                                            </Form>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            <p> </p>
            </Container>
            <Container>
                
                <Row>
                    <Col>
                        <Nav fill variant="tabs" className="justify-content-center" activeKey="/mail">
                            <Button className="custom-button" onClick={handleDeleteSelected}>Delete</Button>
                            <Nav.Link className="nav-link1">
                                <Link to="/mail" className="d-block">Inbox</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link1">
                                <Link to="/mail" className="d-block">Important</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link1">
                                <Link to="/mail" className="d-block">Sent</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link1">
                                <Link to="/mail" className="d-block">Drafts</Link>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <p> </p>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedMails.size === mails.length}
                                    onChange={handleSelectAll}
                                /> All
                            </th>
                            <th>Date</th>
                            <th>From</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mails.map((mail, index) => (
                            <tr key={index} onClick={() => handleRowClick('/message')}>
                                <td onClick={(e) => e.stopPropagation()}>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedMails.has(index)}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange(index);
                                        }}
                                    />
                                </td>
                                <td>{mail.date}</td>
                                <td>{mail.from}</td>
                                <td>{mail.subject}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Container>
    );
};
