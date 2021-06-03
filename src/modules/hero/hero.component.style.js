import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'

const heroSize = () => css`
  background-image: url(https://res.cloudinary.com/dekysavu4/image/upload/v1622728615/Espa%C3%B1lol/JPG%20rgb%2072%20dpi%20%28para%20web%29/hero-sized_uzn9ql.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;


  ${props => config(props).media['sm']`
    background-repeat: repeat-x;
    transform: translateY(-50px);
    z-index: -1;
    background-size: 35%;
  `}

`

export const HeroImage = styled.div`
  ${heroSize}
`
