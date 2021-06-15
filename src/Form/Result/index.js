import './index.css';

const Result = ({ result }) => (
    result !== undefined && (
    <p className="result">
        WYNIK:&nbsp;
        <strong>
            {result.finalResult}&nbsp;{result.currency}
        </strong>
    </p>
));

export default Result;