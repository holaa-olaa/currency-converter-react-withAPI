import { useLocalDate } from './useLocalDate';
import { StyledClock } from './styles.js';

const Clock = () => {
    const date = useLocalDate();

    return (
        <StyledClock>Dzisiaj jest {date}</StyledClock>
    );
};

export default Clock;