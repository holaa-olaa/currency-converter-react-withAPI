import './index.css';
import Label from './Label';
import Input from './Input';

const currencies = [
    { id: "EUR", exchangeRate: 4.5829, name: "Euro", },
    { id: "GBP", exchangeRate: 5.2908, name: "Funt brytyjski", },
    { id: "USD", exchangeRate: 3.8066, name: "Dolar amerykański", },
];

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kantor walut</legend>

            <Label
                labelText={"Kwota w złotych (PLN)*:"}
                body={<Input></Input>}
            >
            </Label>

            <Label 
            labelText={"Wybierz walutę*:"} 
            body={
                <select className="form__field" required>
                    <option value="">Wybierz z listy</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">Funt brytyjski (GBP)</option>
                    <option value="USD">Dolar amerykański (USD)</option>
                </select>
            }> 
            </Label>

            <span className="form__buttonContainer">
                <button className="form__button">Przelicz kwotę!</button>
                <button type="reset" className="form__button">Wyczyść</button>
            </span>

            <p className="form__paragraph"> WYNIK: <strong></strong></p>

            <footer className="form__footer">
                Kurs z dnia 06.05.2021 - według danych z Narodowego Banku Polskiego.
            </footer>
        </fieldset>
    </form>
);

export default Form;