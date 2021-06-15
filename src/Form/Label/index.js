import './index.css';

const Label = ({ labelText, body }) => (
    <label>
        <span className="form__labelText">
            {labelText}
        </span>
        {body}
    </label>
);

export default Label;