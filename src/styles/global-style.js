/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    margin: 0;
    padding: 0;
    font-size: 14px;
    scroll-behavior: smooth;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: Roboto,sans-serif;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
  }

  #main {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyles;
