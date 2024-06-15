import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Accordion, Table } from 'react-bootstrap';


export const Projects = () => {
    return (
        <Container fluid="md">
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
                                            <option value="1">Title</option>
                                            <option value="2">Due date</option>
                                            <option value="3">Course asc</option>
                                            <option value="4">Course desc</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filter by course</Form.Label>
                                        <Form.Select>
                                            <option>Choose</option>
                                            <option value="1">English language</option>
                                            <option value="2">Spanish language</option>
                                            <option value="3">Mathematics</option>
                                            <option value="4">Biology</option>
                                            <option value="5">Geography</option>
                                            <option value="6">Physics</option>
                                            <option value="7">PE</option>
                                            <option value="8">Arts</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Show past projects</Form.Label>
                                        <Form>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Show"
                                        />                                       
                                        </Form>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div><p></p></div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header-1">Essay on 'The catcher in the Rye' - English language - due: June 5th, 2024</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices tortor eget rhoncus. Vivamus a felis ut arcu congue feugiat non eget nunc. Nullam accumsan euismod dictum. Nunc ullamcorper scelerisque molestie. Phasellus gravida pellentesque egestas. Nunc in orci in nulla finibus molestie. Praesent non leo vel purus consectetur ullamcorper. Integer vulputate, nulla at bibendum imperdiet, metus justo fringilla mauris, a tincidunt lectus libero vitae sapien. Maecenas in nisi sed odio dictum iaculis. Vivamus id ultrices nisl. Suspendisse potenti. Fusce vel turpis lacus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="accordion-header-2">'View from my window' in impressionism style - Arts - due: June 10th, 2024</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices tortor eget rhoncus. Vivamus a felis ut arcu congue feugiat non eget nunc. Nullam accumsan euismod dictum. Nunc ullamcorper scelerisque molestie. Phasellus gravida pellentesque egestas. Nunc in orci in nulla finibus molestie. Praesent non leo vel purus consectetur ullamcorper. Integer vulputate, nulla at bibendum imperdiet, metus justo fringilla mauris, a tincidunt lectus libero vitae sapien. Maecenas in nisi sed odio dictum iaculis. Vivamus id ultrices nisl. Suspendisse potenti. Fusce vel turpis lacus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="accordion-header-4">3D model of the Solar system - Geography - due: June 11th, 2024</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices tortor eget rhoncus. Vivamus a felis ut arcu congue feugiat non eget nunc. Nullam accumsan euismod dictum. Nunc ullamcorper scelerisque molestie. Phasellus gravida pellentesque egestas. Nunc in orci in nulla finibus molestie. Praesent non leo vel purus consectetur ullamcorper. Integer vulputate, nulla at bibendum imperdiet, metus justo fringilla mauris, a tincidunt lectus libero vitae sapien. Maecenas in nisi sed odio dictum iaculis. Vivamus id ultrices nisl. Suspendisse potenti. Fusce vel turpis lacus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="accordion-header-1">Some project title - Mathematics - due: June 11th, 2024</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices tortor eget rhoncus. Vivamus a felis ut arcu congue feugiat non eget nunc. Nullam accumsan euismod dictum. Nunc ullamcorper scelerisque molestie. Phasellus gravida pellentesque egestas. Nunc in orci in nulla finibus molestie. Praesent non leo vel purus consectetur ullamcorper. Integer vulputate, nulla at bibendum imperdiet, metus justo fringilla mauris, a tincidunt lectus libero vitae sapien. Maecenas in nisi sed odio dictum iaculis. Vivamus id ultrices nisl. Suspendisse potenti. Fusce vel turpis lacus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className="accordion-header-2">Holding breath underwater for 45 sec. - PE - due: June 14th, 2024</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis ultrices tortor eget rhoncus. Vivamus a felis ut arcu congue feugiat non eget nunc. Nullam accumsan euismod dictum. Nunc ullamcorper scelerisque molestie. Phasellus gravida pellentesque egestas. Nunc in orci in nulla finibus molestie. Praesent non leo vel purus consectetur ullamcorper. Integer vulputate, nulla at bibendum imperdiet, metus justo fringilla mauris, a tincidunt lectus libero vitae sapien. Maecenas in nisi sed odio dictum iaculis. Vivamus id ultrices nisl. Suspendisse potenti. Fusce vel turpis lacus.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

