import styled from 'styled-components'
import {config} from 'react-awesome-styled-grid'

export const Image = styled.img`
  width: 50%;
  height: 50%;
`

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  ${props => config(props).media['md']`
    justify-content: center;
  `}
`
