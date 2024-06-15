import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './MyCalendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
    const [value, onChange] = useState<Value>(new Date());
    const startDate = new Date(2024, 4, 6); 
    const endDate = new Date(2024, 4, 10); 

    const isAbsent = (date: Date) => {
        return date >= startDate && date <= endDate
    };

    return (
        <div className="MyCalendar">

            <div className="Sample__container">
                <main className="Sample__container__content">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        next2Label={null}
                        prev2Label={null}
                        locale={"en-EN"}
                        selectRange={true}
                        nextLabel={null}
                        prevLabel={null}
                        showDoubleView={true}
                        tileContent={({ date, view }) =>
                            view === 'month' && isAbsent(date) ? <span style={{ color: 'orange' }}>Abs</span> : null
                        }
                    />
                </main>
            </div>
        </div>
    );
}