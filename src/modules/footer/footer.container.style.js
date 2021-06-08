import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'
import {Row} from 'react-awesome-styled-grid'

const fontStyle = () => css`
  font-family: 'Tampa', sans-serif;
  font-size: 16px;
  line-height: 32px;

  ${props => config(props).media['md']`
    font-size: 22px;
  `}  
`

export const Contact = styled.p`
  ${fontStyle}
`
export const FooterContainer = styled(Row)`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
