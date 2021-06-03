import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'

const heroSize = () => css`
  background-image: url(https://res.cloudinary.com/dekysavu4/image/upload/v1622728615/Espa%C3%B1lol/JPG%20rgb%2072%20dpi%20%28para%20web%29/hero-sized_uzn9ql.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 120vw;
  height: 50vh;
  transform: translate(-80px, 0px);


  ${props => config(props).media['md']`
    background-repeat: no-repeat;
    transform: translate(180px, -100px);
    z-index: -1;
    background-size: 50%;
    height: 70vh;
  `}

  ${props => config(props).media['lg']`
    transform: translate(380px, -120px);
    background-size: 36%;
  
  `}

  ${props => config(props).media['xl']`
    transform: translate(500px, -180px);
    background-size: 33%;
    height: 70vh;
  `}
`

export const HeroImage = styled.div`
  ${heroSize}
`

const titleSize = () => css`
  margin-top: 10em;
  padding-right: 1.5em;

  ${props => config(props).media['md']`
    margin: 0 auto;
    padding-left: 6em;
    width: 50vw;
`}

  ${props => config(props).media['lg']`
    padding-left: 5em;
    width: 30vw;
  `}
`

export const HeroTitle = styled.img`
  ${titleSize}
`

const buttonPosition = () => css`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: end;
`

const buttonSize = () => css`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Tampa';
  font-size: 1.3em;
  letter-spacing: 0.03em;
  padding: 5px 15px 5px 21px;
  background: ${props => props.theme.colors.black};
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
`

export const ButtonContainer = styled.div`
  ${buttonPosition}
`

export const BuyButton = styled.button`
  ${buttonSize}
`

const iconPosition = () => css`
  width: 32px;
  height: 32px;
  margin-left: .5em;

`

export const MoneyIcon = styled.img`
  ${iconPosition}
`
