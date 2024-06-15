import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Accordion, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GradesItem } from './GradesItem';
import { Grade } from '../types/grades/grades';

export const Grades = () => {

    const [gradesList, setGradesList] = useState<Grade[]>([
        {
            value: "A",
            description: "Lorem ipsum",
            date: "2024-02-12"
        },
        {
            value: "A-",
            description: "Lorem ipsum second grade",
            date: "2024-02-20"
        },
        {
            value: "B+",
            description: "Lorem ipsum third grade",
            date: "2024-03-02"
        }]);
    useEffect(() => {
        const gradesListAPi: Grade[] = [
            {
                value: "A",
                description: "Lorem ipsum",
                date: "2024-02-12"
            },
            {
                value: "A-",
                description: "Lorem ipsum second grade",
                date: "2024-02-20"
            }, {
                value: "B+",
                description: "Lorem ipsum third grade",
                date: "2024-03-02"
            },
            {
                value: "A",
                description: "Lorem ipsum 4th",
                date: "2024-02-12"
            },
            {
                value: "A-",
                description: "Lorem ipsum 5th grade",
                date: "2024-02-20"
            }, {
                value: "B+",
                description: "Lorem ipsum 6th grade",
                date: "2024-03-02"
            }];
        setGradesList(gradesListAPi);
    }, [])

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Nav className="justify-content-center" activeKey="/">
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Semester
                            </Nav.Link>
                        </Nav.Item  >
                        <Nav.Link className="nav-link1">
                            <Link to="/grades" className="d-block">First</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link1">
                            <Link to="/grades" className="d-block">Second</Link>
                        </Nav.Link>                                 
                    </Nav>
                </Col>
                <Col>
                    <Nav className="justify-content-center" activeKey="/grades">
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Grades
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Link className="nav-link1">
                            <Link to="/grades" className="d-block">Partial</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link1">
                            <Link to="/finalgrades" className="d-block">Final</Link>
                        </Nav.Link>                                 
                    </Nav>
                </Col>
            </Row>
            <div><p></p></div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header-1">English language: A, A, A, A, A, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={ item} />
                                )}                                
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="accordion-header-2">Spanish language: A, B, A-, B+, C, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="accordion-header-4">Mathematics: A-, B, C, B+, A-, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="accordion-header-1">Biology: A, A-, B, B, A-, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="4">
                    <Accordion.Header className="accordion-header-2">Geography: A, A, A, A, A, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="5">
                    <Accordion.Header className="accordion-header-4">Physics: A, A, A, A, A, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="6">
                    <Accordion.Header className="accordion-header-1">PE: A, A, A, A, A, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>            
                <Accordion.Item eventKey="7">
                    <Accordion.Header className="accordion-header-2">Arts: A, A, A, A, A, A</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {gradesList?.map((item, index) => <GradesItem key={index} grade={item} />
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}