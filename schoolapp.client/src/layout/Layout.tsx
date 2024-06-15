import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, Button, Image } from 'react-bootstrap';

export function Layout() {
    const [selectedChild, setSelectedChild] = useState("Child");

    const handleChildSelect = (childName) => {
        setSelectedChild(childName);
    };

    return (
        <div className="app">
            <Navbar expand={"lg"} className="bg-body-info mb-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/image1.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            {/*<Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>*/}
                            {/*    SchoolApp*/}
                            {/*</Offcanvas.Title>*/}
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 pe-3">
                                <Container>
                                    <Nav className="justify-content-left">
                                        <Nav.Link className="nav-link">
                                            <Link to="/grades" className="d-block">Grades</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/schedule" className="d-block">Schedule</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/projects" className="d-block">Projects</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/attendance" className="d-block">Attendance</Link>
                                        </Nav.Link>
                                    </Nav>
                                </Container>
                                <Container>
                                    <Nav className="justify-content-end">
                                        <Nav.Link>
                                            <Link to="/mail" className="d-block">Mail</Link>
                                        </Nav.Link>

                                        <NavDropdown title={selectedChild} id={`child`}>
                                            <NavDropdown.Item className="custom-dropdown-item" onClick={() => handleChildSelect("Older child")}>
                                                <Link to="/" className="d-block">Older child</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-item" onClick={() => handleChildSelect("Younger child")}>
                                                <Link to="/" className="d-block">Younger child</Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown title="Account" id={`offcanvasNavbarDropdown-expand`}>
                                            <NavDropdown.Item className="custom-dropdown-item">
                                                <Link to="/account" className="d-block">Account details</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className="custom-dropdown-item">
                                                <Link to="/settings" className="d-block">Settings</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="custom-dropdown-item">
                                                <Link to="/login" className="d-block">Log out</Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Enter your query here"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary" className="custom-button">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
