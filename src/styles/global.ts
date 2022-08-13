import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.third};
    color: ${props => props.theme.colors.text};
    font: 400 16px "Encode Sans", sans-serif;
  }

  a{
    list-style: none;
    display: inline-block;
    text-decoration: none;
  }

  ul,ol,li {
    list-style: none;
  }
`;
