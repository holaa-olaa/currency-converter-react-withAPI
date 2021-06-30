import { Legend } from './styles.js';

const Label = ({ labelText, body }) => (
    <label>
        <Legend>
            {labelText}
        </Legend>
        {body}
    </label>
);

export default Label;