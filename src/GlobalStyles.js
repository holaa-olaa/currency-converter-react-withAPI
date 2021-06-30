import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const GlobalStyle = createGlobalStyle`

  ${normalize}
  
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    width: 100%;
    max-width: 800px;
    margin: 80px auto;
    padding: 10px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 22px;
    background-image: url("https://image.freepik.com/darmowe-wektory/analiza-rynku-akcji-i-handel-akcjami-symbole-walut-wykresy-biznesowe-i-globalne-transfery-pieniezne_115579-1283.jpg");
    background-size: cover;
  }
`;