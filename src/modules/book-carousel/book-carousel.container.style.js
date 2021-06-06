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
  margin-top: 1em;

  ${props => config(props).media['md']`
    justify-content: center;
  `}

  &::nth-child(1) {
    color: red;
  }
`

export const Arrow = styled.img`
  width: 100%;
`

export const ButtonsSpace = styled.div`
  width: 100%;
  height: 100%;
`
