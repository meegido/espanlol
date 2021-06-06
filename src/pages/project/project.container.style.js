import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'
import { Col, Row } from 'react-awesome-styled-grid'

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
  font-size: 24px;
  text-transform: uppercase;

  ${props => config(props).media['sm']`
    font-size: 42px;
  `}
`

const imageStyle = () => css`
  width: 100%;

  ${props => config(props).media['sm']`
     width: 100%;
  `}
`

export const Image = styled.img`
  ${imageStyle}
`

export const ProjectDescription = styled(Row)`
  margin-bottom: 4em;
`

const bookIndexPosition = () => css`
  text-align: right;
`

export const BookIndex = styled.div`
  ${bookIndexPosition}
  padding-left: 3em;
`

export const DiscIndex = styled.div`
  padding-right: 3em;
`

const indexTitle = () => css`
  font-family: 'Trueno', sans-serif;
`

export const IndexTitle = styled.h3`
  ${indexTitle}
`

export const IndexLayout = styled(Col)`
 ${props => config(props).media['sm']`
       flex-flow: wrap-reverse;
  `}
`
