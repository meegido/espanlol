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
  justify-content: center;
  align-items: cener;
  margin-bottom: 1em;
  margin-top: 2em;
`

export const SocialContainer = styled.div`
  ${socialContainer}
`

export const YoutubeIcon = styled.img`
  width: 25%;

  ${props => config(props).media['sm']`
    width: 15%;
  `}
`

export const SpotifyIcon = styled.img`
  width: 15%;
  padding: 0 1em;

  ${props => config(props).media['sm']`
    width: 12%;
  `}
`
