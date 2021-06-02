import { createGlobalStyle } from 'styled-components/macro'
import RasaRegular from './fonts/Rasa-Regular.ttf'
import NHLTampa from './fonts/NHLTB___.TTF'
import Trueno from './fonts/TruenoSBd.otf'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Rasa Regular', sans-serif;
    font-size: 16px; 
    line-height: 117.1%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(241,240,238,1) 100%) no-repeat fixed;
  }

  @font-face {
    font-family: 'Rasa Regular';
    src: url(${RasaRegular}) format('truetype')
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Tampa';
    src: url(${NHLTampa}) format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Trueno Bold';
    src: url(${Trueno}) format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
`
