import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'

const titleStyle = () => css`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 63px;
  margin: 0;
  padding: .2em 0 .1em 0;
`

export const TitleSection = styled.h2`
  ${titleStyle}
  font-family: 'Tampa', sans-serif;
  font-size: 42px;
  text-transform: uppercase;

  ${props => config(props).media['sm']`
    font-size: 42px;
  `}
`

const socialContainer = () => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1em;
  margin-top: 2em;
`

export const PressContainer = styled.div`
  ${socialContainer}
`

export const Icon = styled.img`
  width: 35%;
  padding: 0 1em;

  ${props => config(props).media['sm']`
    width: 20%;
  `}
`
