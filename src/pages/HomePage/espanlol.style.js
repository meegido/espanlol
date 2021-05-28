import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  body {
    background: pink;
    font-family: ${props => props.theme.fontFamily};
  }
`
