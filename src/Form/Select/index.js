import { StyledInput } from '../Input/styles.js';

const Select = ({ currencies, currency, setCurrency }) => (

    <StyledInput 
        as="select"
        required
        onChange={({ target }) => setCurrency(target.value)}
        value={currency}
    >
        {currencies.map(currency => (
            <option key={currency.id} value={currency.id}>
                {currency.name}
            </option>
        ))}
    </StyledInput>
);

export default Select;