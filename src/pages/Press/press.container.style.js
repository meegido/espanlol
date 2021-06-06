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
