import { createGlobalStyle } from 'styled-components/macro'
import RasaRegular from './fonts/Rasa-Regular.ttf'
import NHLTampa from './fonts/NHLTB___.TTF'
import Trueno from './fonts/TruenoSBd.otf'

export const GlobalStyles = createGlobalStyle`
  * {
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rasa Regular', sans-serif;
    font-size: 16px; 
    line-height: 117.1%;
    height: 100%;
    overflow-x: hidden;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(241,240,238,1) 100%) no-repeat fixed;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
  }

  @font-face {
    font-family: 'Rasa Regular';
    src: local("Rasa Regular"), 
      url(${RasaRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Tampa';
    src: local("Tampa"), 
      url(${NHLTampa}) format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Trueno Bold';
    src: local("Trueno Bold"), 
      url(${Trueno}) format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
`
