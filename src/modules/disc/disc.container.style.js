import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'

const titleStyle = () => css`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  font-family: 'Trueno', sans-serif;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 114.1%;
  margin-bottom: 1em;
`

export const Title = styled.h2`
  ${titleStyle}
`

const profleStyle = () => css`
  width: 100%;
`

export const ProfileImage = styled.img`
  ${profleStyle}
`

const socialContainer = () => css`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 2em;
`

export const SocialContainer = styled.div`
  ${socialContainer}
`

export const SocialIcon = styled.img`
  width: 20%;
  padding: 0 1em;

  ${props => config(props).media['sm']`
    width: 8%;
  `}
`
