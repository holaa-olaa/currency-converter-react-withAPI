import './index.css';
import Label from './Label';
import Input from './Input';
import Select from './Select';
import Result from './Result';
import Footer from './Footer';
import { useState } from 'react';


const Form = ({ currencies }) => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [currency, setCurrency] = useState(currencies[0].id);

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ id }) => id === currency).exchangeRate;

        setResult({
            finalResult: amount / rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kantor walut</legend>
                <p>
                    <Label
                        labelText={"Kwota w złotych (PLN)*:"}
                        body={<Input amount={amount} setAmount={setAmount} />}
                    >
                    </Label>
                </p>
                <p>
                    <Label
                        labelText={"Wybierz walutę*:"}
                        body=
                        {<Select
                            currencies={currencies}
                            currency={currency}
                            setCurrency={setCurrency}
                        />}
                    >
                    </Label>
                </p>

                <span className="form__buttonContainer">
                    <button className="form__button">
                        Przelicz kwotę!
                    </button>
                    <button type="reset" className="form__button">
                        Wyczyść
                    </button>
                </span>

                <Result result={result}></Result>

                <Footer body={"Kurs z dnia 06.05.2021 - według danych z Narodowego Banku Polskiego."}> </Footer>
            </fieldset>
        </form>
    );
}

export default Form;