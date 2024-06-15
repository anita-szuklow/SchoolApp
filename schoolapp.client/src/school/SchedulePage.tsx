import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles.css';

export const Schedule = () => {
    // State to manage which cell is currently clicked
    const [selectedCell, setSelectedCell] = useState(null);

    // Function to handle cell click
    const handleCellClick = (lesson, day) => {
        // Set the selected cell to be displayed
        setSelectedCell({ lesson, day });
    };

    // JSX for the specific text to display under the table when a cell is clicked
    const renderSelectedText = () => {
        if (selectedCell) {
            const { lesson, day } = selectedCell;
            let textToShow = '';

            // Determine which text to show based on the selected lesson and day
            if (lesson === '1' && day === 'Monday') {
                textToShow = "The essay on 'The Catcher in the Rye' is due.";
            }
            else if (lesson === '3' && day === 'Monday') {
                textToShow = "Frog disection will be performed";
            }
            else if (day === 'Tuesday') {
                textToShow = "Class trip to the Natural History Museum";
            }
            else if (lesson === '2' && day === 'Wednesday') {
                textToShow = "Holding breath underwater will be timed";
            }
            else if (day === 'Friday') {
                textToShow = "School drama group will perform 'Hamlet' and invites to picnic afterwards";
            }
            else {
                textToShow = `Nothing to display`;
            }

            return (
                <div className="selected-text">
                    <p>Selected Lesson: {lesson}, {day}</p>
                    <p>{textToShow}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <Container fluid="md">
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Link className="nav-link2">
                    <Link to="/schedule" className="d-block">previous</Link>
                </Nav.Link>
                <Nav.Item className="nav-item1">
                    <Nav.Link eventKey="disabled" disabled>
                        May 27-31, 2024
                    </Nav.Link>
                </Nav.Item>
                <Nav.Link className="nav-link2">
                    <Link to="/schedule" className="d-block">next</Link>
                </Nav.Link>
            </Nav>
            <div><p></p></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Lesson</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td onClick={() => handleCellClick('1', 'Monday')}>Lesson 1 Monday details</td>
                        <td onClick={() => handleCellClick('1', 'Tuesday')}>Lesson 1 Tuesday details</td>
                        <td onClick={() => handleCellClick('1', 'Wednesday')}>Lesson 1 Wednesday details</td>
                        <td onClick={() => handleCellClick('1', 'Thursday')}>Lesson 1 Thursday details</td>
                        <td onClick={() => handleCellClick('1', 'Friday')}>Lesson 1 Friday details</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td onClick={() => handleCellClick('2', 'Monday')}>Lesson 2 Monday details</td>
                        <td onClick={() => handleCellClick('2', 'Tuesday')}>Lesson 2 Tuesday details</td>
                        <td onClick={() => handleCellClick('2', 'Wednesday')}>Lesson 2 Wednesday details</td>
                        <td onClick={() => handleCellClick('2', 'Thursday')}>Lesson 2 Thursday details</td>
                        <td onClick={() => handleCellClick('2', 'Friday')}>Lesson 2 Friday details</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td onClick={() => handleCellClick('3', 'Monday')}>Lesson 3 Monday details</td>
                        <td onClick={() => handleCellClick('3', 'Tuesday')}>Lesson 3 Tuesday details</td>
                        <td onClick={() => handleCellClick('3', 'Wednesday')}>Lesson 3 Wednesday details</td>
                        <td onClick={() => handleCellClick('3', 'Thursday')}>Lesson 3 Thursday details</td>
                        <td onClick={() => handleCellClick('3', 'Friday')}>Lesson 3 Friday details</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td onClick={() => handleCellClick('4', 'Monday')}>Lesson 4 Monday details</td>
                        <td onClick={() => handleCellClick('4', 'Tuesday')}>Lesson 4 Tuesday details</td>
                        <td onClick={() => handleCellClick('4', 'Wednesday')}>Lesson 4 Wednesday details</td>
                        <td onClick={() => handleCellClick('4', 'Thursday')}>Lesson 4 Thursday details</td>
                        <td onClick={() => handleCellClick('4', 'Friday')}>Lesson 4 Friday details</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td onClick={() => handleCellClick('5', 'Monday')}>Lesson 5 Monday details</td>
                        <td onClick={() => handleCellClick('5', 'Tuesday')}>Lesson 5 Tuesday details</td>
                        <td onClick={() => handleCellClick('5', 'Wednesday')}>Lesson 5 Wednesday details</td>
                        <td onClick={() => handleCellClick('5', 'Thursday')}>Lesson 5 Thursday details</td>
                        <td onClick={() => handleCellClick('5', 'Friday')}>Lesson 5 Friday details</td>
                    </tr>
                </tbody>
            </Table>
            {renderSelectedText()}
        </Container>
    );
};
