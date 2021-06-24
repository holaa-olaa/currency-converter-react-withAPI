import { useLocalDate } from './useLocalDate';
import './index.css';

const Clock = () => {
    const date = useLocalDate();

    return (
        <div className="clock">Dzisiaj jest {date}</div>
    );
};

export default Clock;