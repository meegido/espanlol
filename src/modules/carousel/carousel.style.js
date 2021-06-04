import styled from 'styled-components'
import {config} from 'react-awesome-styled-grid'

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  ${props => config(props).media['md']`
    justify-content: center;
  `}
`

export const ArrowsText = styled.p`
  font-family: 'Trueno';
  font-size: 14px;
  letter-spacing: 0.01em;
  text-align: center;
  line-height: 16px;

  ${props => config(props).media['md']`
    font-size: 16px;
    line-height: 24px;
    width: 40%;
    padding: 0 3em;
  `}

  ${props => config(props).media['lg']`
    width: 30%;
  `}
`
