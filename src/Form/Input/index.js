import './index.css';

const Input = ({ amount, setAmount }) => (
    <p>
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
    </p>
);

export default Input;