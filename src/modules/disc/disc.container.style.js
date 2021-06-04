import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'

const titleStyle = () => css`
  border-top: 1px solid ${props => props.theme.colors.black};
  border-bottom: 1px solid ${props => props.theme.colors.black};
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 32px;
  margin-bottom: 1em;
  padding: .3em;
`

export const TitleProfile = styled.h2`
  ${titleStyle}
  font-family: 'Trueno', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
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
  margin-bottom: 2em;
  
`

export const SocialContainer = styled.div`
  ${socialContainer}
  align-items: baseline;
`

export const SocialIcon = styled.img`
  width: 15%;
  padding: 0 1em;

  ${props => config(props).media['sm']`
    width: 10%;
  `}
`

export const SpotifyIcon = styled.img`
  width: 8%;

  ${props => config(props).media['sm']`
    width: 5%;
    padding: 0 1em;
  `}
`

export const SectionTitle = styled.h2`
  ${titleStyle}
  font-family: 'Tampa', sans-serif;
  font-size: 40px;
  margin-bottom: .5em;
`

export const SocialWithButtonContainer = styled.div`
  ${socialContainer}
  align-items: center;
  flex-direction: column;

  ${props => config(props).media['sm']`
    flex-direction: row;
  `}
`

const readButton = () => css`
  background: transparent;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.black};
  padding: .5em 1em;
  font-family: 'Tampa', sans-serif;
  font-size: 10px;
  margin-top: 1em;

  ${props => config(props).media['sm']`
    flex-direction: row;
    margin-top: 0;
  `}

  ${props => config(props).media['lg']`
    font-size: 14px;
  `}
`

export const ReadButton = styled.button`
  ${readButton}
`
