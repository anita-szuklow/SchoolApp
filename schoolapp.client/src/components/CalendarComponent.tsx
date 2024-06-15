import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the stylesheet for react-calendar

const CalendarComponent: React.FC = () => {
    const [date, setDate] = useState<Date | Date[]>(new Date());

    const onChange = (newDate: Date | Date[]) => {
        setDate(newDate);
    };

    return (
        <div>
            <h2>Select a date</h2>
            <Calendar onChange={onChange} value={date} />
            <p>Selected date: {Array.isArray(date) ? date.map(d => d.toDateString()).join(', ') : date.toDateString()}</p>
        </div>
    );
};

export default CalendarComponent;
