import { StyledInput } from './styles.js';

const Input = ({ amount, setAmount }) => (
    <StyledInput
        value={amount}
        type="number"
        step="0.01"
        min="0.01"
        placeholder="Wpisz kwotę"
        required
        autoFocus
        onChange={({ target }) => setAmount(target.value)}
    />
);

export default Input;