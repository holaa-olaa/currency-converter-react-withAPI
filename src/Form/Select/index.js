import './index.css';

const Select = ({ currencies, currency, setCurrency }) => (

    <select
        className="form__field"
        required
        onChange={({ target }) => setCurrency(target.value)}
        value={currency}
    >
        {
        currencies.map(currency => (
            <option key={currency.id} value={currency.id}>
                {currency.name}
            </option>
        ))}
    </select>
);

export default Select;