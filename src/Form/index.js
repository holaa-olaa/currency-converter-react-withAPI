import currencies from './curriencies.js';
import Label from './Label';
import Result from './Result';
import Footer from './Footer';
import Clock from './Clock';
import Buttons from './Buttons';
import { useState } from 'react';
import { FormFieldset, FormLegend, FormWrapper, Loading, Failure, StyledInput } from './styles.js';
import { useRatesData } from './UseRatesData.js';


const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const onFormReset = () => {
        setAmount("");
        setResult();
    };


    return (
        <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
            <Clock />
            <FormFieldset>
                <FormLegend>Kantor walut</FormLegend>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Chwileczkę... <br />Ładuję kursy walut z Europejskiego Banku Centralnego.
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (

                            <Failure>
                                Ojojoj... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
                            </Failure>
                        ) : (
            <>    
                <p>
                    <Label
                        labelText="Kwota w złotych (PLN)*:"
                        body={
                        <StyledInput
                            value={amount}
                            type="number"
                            step="0.01"
                            min="0.01"
                            placeholder="Wpisz kwotę"
                            required
                            autoFocus
                            onChange={({ target }) => setAmount(target.value)}
                        />}
                    >
                    </Label>
                </p>
                <p>
                    <Label
                        labelText="Wybierz walutę*:"
                        body=
                        {<StyledInput 
                            as="select"
                            required
                            onChange={({ target }) => setCurrency(target.value)}
                            value={currency}
                        >
                            {Object.keys(ratesData.rates).map(((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            )))}
                        </StyledInput>}
                    >
                    </Label>
                </p>
                <Buttons />
                <Result result={result} />
                <Footer>
                    Kurs z dnia {ratesData.date} - według danych z Narodowego Banku Polskiego
                </Footer>
                </>
                        )
                    )}
            </FormFieldset>
        </FormWrapper>
    );
};

export default Form;