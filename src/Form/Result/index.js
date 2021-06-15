import './index.css';

const Result = ({ result }) => (
    result !== undefined && (
    <p className="form__paragraph">
        WYNIK:
        <strong>
            {result.finalResult}{result.currency}
        </strong>
    </p>
)
);

export default Result;