import './index.css';

const Buttons = () => (
    <span className="form__buttonContainer">
        <button 
            className="form__button"
        >   
            Przelicz kwotę!
        </button>
        <button type="reset" className="form__button">Wyczyść</button>
    </span>
);

export default Buttons;