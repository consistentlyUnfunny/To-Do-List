import React, {useState, useEffect} from 'react';

function DateDisplay(){
    const [time, setTime] = useState(new Date()); // set time updates time automatically when called
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[time.getDay()];

    useEffect(() =>{
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // refresh every second

        return () => clearInterval(interval); // cleanup function, if unmounted, clear the interval

    }, []); // empty array means it will only run once

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let meridiem = hours >= 12? 'PM' : 'AM';
        hours = hours > 12 ? hours % 12 : hours;
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');

        return `${hours}:${minutes} ${meridiem}`;
    }

    return (
        <div className = "date-container">
            <h1>{today}</h1>
            <h3>{formatTime()}</h3>
        </div>
    );
}

export default DateDisplay;