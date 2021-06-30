import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import background from './background.jpeg';


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
    background-image: url("${background}");
    background-size: cover;
  }
`;