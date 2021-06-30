import { Wrapper, Button } from './styles.js';

const Buttons = () => (
    <Wrapper>
        <Button>
            Przelicz kwotę!
        </Button>
        <Button type="reset">
            Wyczyść
        </Button>
    </Wrapper>
);

export default Buttons;