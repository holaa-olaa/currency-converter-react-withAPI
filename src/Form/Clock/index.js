import { useEffect, useState } from "react";
import './index.css';

const Clock = () => {

    const [localDate, setLocalDate] = useState(new Date());
    const formattedDate = localDate.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">Dzisiaj jest {formattedDate}</div>
    );
};

export default Clock;