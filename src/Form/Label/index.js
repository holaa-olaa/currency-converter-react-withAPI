import './index.css';

const Label = ({ labelText, body }) => (
    <label>
        <span className="label">
            {labelText}
        </span>
        {body}
    </label>
);

export default Label;