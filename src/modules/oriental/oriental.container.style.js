import styled, {css} from 'styled-components'
import { Col } from 'react-awesome-styled-grid'
import {config} from 'react-awesome-styled-grid'


const positioningRow = () => css`
  position: relative;
`

export const RelativeColOriental = styled(Col)`
  ${positioningRow}
`

const positioningText = () => css`
  position: absolute; 
  top: 0;
  right: 30px;

  ${props => config(props).media['sm']`
    top: 10px;
    right: 40px;
  `}
`

export const AbsolutTextOriental = styled.div`
  ${positioningText}
`

const text = () => css`
  text-transform: uppercase;
  font-family: 'Tueno', sans-serif;
  font-size: 14px;
  line-height: 5px;
  color: ${props => props.theme.colors.smoothWhite};
  text-align: left;

  ${props => config(props).media['sm']`
    font-size: 16px;
  `}

  ${props => config(props).media['lg']`
    font-size: 24px;
  `}

`

export const TextOriental = styled.p`
  ${text}
`
