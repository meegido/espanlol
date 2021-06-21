import styled, {css} from 'styled-components'
import {Col} from 'react-awesome-styled-grid'


const positioningRow = () => css`
  position: relative;
`

export const RelativeCol = styled(Col)`
  ${positioningRow}
`

const positioningText = () => css`
  position: absolute; 
  top: 0;
  right: 10px;
`

export const AbsolutText = styled.div`
  ${positioningText}
`

const text = () => css`
  text-transform: uppercase;
  font-family: 'Tueno', sans-serif;
  font-size: 14px;
  line-height: 5px;
  color: ${props => props.theme.colors.smoothWhite};
  text-align: left;

`

export const Text = styled.p`
  ${text}
`
