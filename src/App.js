import Form from './Form';

const currencies = [
  { id: "EUR", exchangeRate: 4.5829, name: "Euro", },
  { id: "GBP", exchangeRate: 5.2908, name: "Funt brytyjski", },
  { id: "USD", exchangeRate: 3.8066, name: "Dolar amerykański", },
];

function App() {
  return (
    <Form currencies={currencies}></Form>
  );
};

export default App;
