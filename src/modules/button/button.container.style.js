import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'


const buttonPosition = () => css`
  margin: 1em 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: end;

  ${props => config(props).media['lg']`
    margin-top: 1em;
    margin-bottom: 2em;
  `}

  ${props => config(props).media['xl']`
    margin: 1em;
  `}
`

const buttonSize = () => css`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Tampa';
  font-size: 14px;
  letter-spacing: 0.03em;
  padding: 5px 15px 3px 21px;
  cursor: pointer;
  background: ${props => props.theme.colors.black};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
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
