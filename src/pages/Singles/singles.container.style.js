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

const socialContainer = () => css`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  margin-top: 2em;
`

export const SocialContainer = styled.div`
  ${socialContainer}
`

const alignIcons = () => `
  display: flex;

`

export const AlginIconRight = styled.a`
  ${alignIcons}
  justify-content: flex-end;
  margin-right: 2em;
`

export const AlginIconLeft = styled.a`
  ${alignIcons}
  margin-right: 3em;
`

export const YoutubeIcon = styled.img`
  width: 50%;
  height: 100%;

  ${props => config(props).media['sm']`
    width: 30%;
  `}
`

export const SpotifyIcon = styled.img`
  width: 25%;
  height: 100%;

  ${props => config(props).media['sm']`
    width: 10%;
  `}
`

const image = () => css`
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
  margin-top: 3em;
`

export const SingleImage = styled.img`
  ${image}
`
