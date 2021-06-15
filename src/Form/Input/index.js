import './index.css';

const Input = ({ amount, setAmount }) => (
    <input
        value={amount}
        className="input"
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