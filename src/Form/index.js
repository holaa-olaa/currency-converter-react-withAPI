import currencies from './curriencies.js';
import Label from './Label';
import Input from './Input';
import Select from './Select';
import Result from './Result';
import Footer from './Footer';
import Clock from './Clock';
import Buttons from './Buttons';
import { useState } from 'react';
import { FormFieldset, FormLegend, FormWrapper } from './styles.js';


const Form = () => {
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
                <p>
                    <Label
                        labelText="Kwota w złotych (PLN)*:"
                        body={<Input amount={amount} setAmount={setAmount} />}
                    >
                    </Label>
                </p>
                <p>
                    <Label
                        labelText="Wybierz walutę*:"
                        body=
                        {<Select
                            currencies={currencies}
                            currency={currency}
                            setCurrency={setCurrency}
                        />}
                    >
                    </Label>
                </p>
                <Buttons />
                <Result result={result} />
                <Footer>
                    Kurs z dnia 06.05.2021 - według danych z Narodowego Banku Polskiego
                </Footer>
            </FormFieldset>
        </FormWrapper>
    );
};

export default Form;