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
    transform: translate(180px, -110px);
    z-index: -1;
    background-size: 50%;
    height: 68vh;
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

const titlePosition = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  ${titlePosition}
`

const titleSize = () => css`
  margin-top: 10em;
  padding: 0 2em;

  ${props => config(props).media['md']`
    margin-top: 0;  
    padding: 0 20em;
`}

  ${props => config(props).media['lg']`
    padding: 0 34em;
  `}
`

export const HeroTitle = styled.img`
  ${titleSize}
`

const sloganStyle = () => css`
  font-family: 'Trueno';
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin-top: .3em;
`

export const HeroText = styled.h2`
  ${sloganStyle}
`

const buttonPosition = () => css`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: end;

  ${props => config(props).media['lg']`
    margin-top: 1em;
  `}
`

const buttonSize = () => css`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Tampa';
  font-size: 1.3em;
  letter-spacing: 0.03em;
  padding: 5px 15px 5px 21px;
  cursor: pointer;
  background: ${props => props.theme.colors.black};
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: ${props => props.theme.colors.white};
  opacity: .5;
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
