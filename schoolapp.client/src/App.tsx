import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet, Link } from 'react-router-dom';
function App() {
    return (
        <Container>
            {/*<Row>*/}
            {/*<p></p>*/}
            {/*</Row>*/}
            <Row>
                
                <Col>
                    {/*<Container>*/}
                    <Link to="/grades">
                        <Card className="text-center">
                        <Card.Header className="card-header1">Recent grades</Card.Header>
                            <Card.Body className="card-body1">
                            <Card.Text>
                                <p>English language: A</p>
                                <p>Spanish language: A</p>
                                <p>Mathematics: A</p>
                                <p>PE: A</p>
                                <p>Music: A</p>
                                <p>Biology: A</p>
                            </Card.Text>
                            
                                {/*<Button variant="outline-primary">See all grades</Button>*/}
                            
                        </Card.Body>
                        </Card >
                        </Link>
                    {/*</Container>*/}
                </Col>
                <Col>
                    <Link to="/schedule">
                    <Card className="text-center">
                            <Card.Header className="card-header2">Today's schedule</Card.Header>
                            <Card.Body className="card-body2">
                            <Card.Text>
                                <p>1: Biology</p>
                                <p>2: Mathematics</p>
                                <p>3: English language</p>
                                <p>4: English language</p>
                                <p>5: Spanish language</p>
                                <p>6: PE</p>
                            </Card.Text>                            
                                {/*<Button variant="outline-primary">Full schedule</Button>*/}                            
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/projects">
                    <Card className="text-center">
                        <Card.Header>Upcoming projects</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>Geography: 3D model of the solar system</p>
                                    <p>Due: May 8th, 2024</p>
                                    <p>*</p>
                                    <p>English: An essay on 'The Catcher in the Rye'</p>
                                    <p>Due: May 4th, 2024</p>
                                    <p>*</p>
                                    <p>Music: Etiude in D-minor</p>
                                    <p>Due: May 16th, 2024</p>
                                
                                </Card.Text> 
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/attendance">
                    <Card className="text-center">
                            <Card.Header className="card-header1">Recent attendance notifications</Card.Header>
                            <Card.Body className="card-body1">
                            <Card.Text>
                                <p>04/15: Absent</p>
                                <p>04/16: Absent</p>
                                <p>04/17: Absent</p>
                                <p>04/18: Absent</p>
                                <p>04/19: Absent</p>
                            </Card.Text>                            
                                {/*<Button variant="outline-primary">See attendance</Button>*/}                            
                        </Card.Body>
                        </Card>
                    </Link>
                    </Col>
                
            </Row>
            <Row>
            <p></p>
            </Row>
            <Row>
                <Col>
                    <Link to="/mail">
                    <Card className="text-center">
                    <Card.Header>Lastest message</Card.Header>
                    <Card.Body>
                        <Card.Title>From: Mrs. Smith (English language)</Card.Title>
                        <Card.Text>
                            Alan needs to read 'The Catcher in the Rye' by next Monday.
                            </Card.Text>                            
                                {/*<Button variant="outline-primary">See all messages</Button>*/}                            
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="card-header2">School newsletter</Card.Header>
                        <Card.Body className="card-body2" >
                            <Carousel>
                                <Carousel.Item>
                                    <Image src="/image/spelling-bee.jpg" text="Spelling bee contest" />
                                    <Carousel.Caption>
                                        <h3>Spelling bee contest</h3>
                                        <p>Our schoold held the annual spelling bee contest for Norwalk Elementary Schools.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/image/zoo.jpg" text="The trip to the Bronx Zoo" />
                                    <Carousel.Caption>
                                        <h3>The trip to the Bronx Zoo</h3>
                                        <p>Grades 4 and 5 went on a full-day trip to the Bronx Zoo, where they had a chance to watch the famous gorillas.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src="/image/celebration.jpg" text="School's 100th anniversary celebration" />
                                    <Carousel.Caption>
                                        <h3>School's 100th anniversary celebration</h3>
                                        <p>
                                            Check the story of our 100th anniveracy celebration beautifully prepared by 8-graders.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default App;