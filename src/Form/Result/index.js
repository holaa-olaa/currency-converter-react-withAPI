import { StyledResult } from './styles.js';

const Result = ({ result }) => (
    <StyledResult>
        WYNIK:&nbsp;
        {result !== undefined && (
            <strong>
                {result.finalResult.toFixed(2)}&nbsp;{result.currency}
            </strong>
        )}
    </StyledResult>
);

export default Result;