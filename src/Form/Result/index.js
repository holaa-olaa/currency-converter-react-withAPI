import './index.css';

const Result = ({ result }) => (
    <p className="result">
        WYNIK:&nbsp;
        {result !== undefined && (
            <strong>
                {result.finalResult.toFixed(2)}&nbsp;{result.currency}
            </strong>
        )}
    </p>
);

export default Result;