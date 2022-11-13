import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  // Roboto
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
  // Montserrat
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat', sans-serif;
    background-color: #303030;
  }
  ul{
    list-style: none;
  }
`;
