import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Accordion, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';

export const FinalGrades = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Nav className="justify-content-center" activeKey="/">
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Semester
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Link className="nav-link1">
                            <Link to="/grades" className="d-block">First</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link1">
                            <Link to="/grades" className="d-block">Second</Link>
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className="justify-content-center" activeKey="/finalgrades">
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
            <Container >
                <Col>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>English language</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Spanish language</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>Mathematics</td>
                        <td>B</td>
                    </tr>
                    <tr>
                        <td>Biology</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Geography</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>PE</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>Arts</td>
                        <td>A</td>
                    </tr>
                </tbody>
                </Table>
                </Col>
            </Container>
        </Container>
    )
}