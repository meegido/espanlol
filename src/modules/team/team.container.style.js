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

export const TeamTitle = styled.h2`
  ${titleStyle}
  font-family: 'Trueno', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
`

const socialContainer = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`
export const SocialProfileContainerPrincipal = styled.div`
  ${socialContainer}
`

export const SocialContainerSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  width: 80%;
`

export const SocialProfileContainerSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${props => config(props).media['sm']`
    justify-content: flex-end;
  `}
`

export const SocialProfileContainerSgae = styled.div`
  display: flex;
  flex-direction: row;
  align-content: end;
  align-items: end;
  justify-content: flex-end;
  margin-top: 1em;
`

const profileLogos = () => css`
  width: 30%;

  ${props => config(props).media['sm']`
    width: 25%;
  `}
`

export const SocialProfile = styled.img`
  ${profileLogos}
`

export const SocialProfileSpotify = styled.img`
  width: 40%;
  
  ${props => config(props).media['sm']`
    width: 30%;
  `}
`

export const SocialProfileYoutube = styled.img`
  width: 65%;
  
  ${props => config(props).media['sm']`
    width: 55%;
  `}
`

export const SocialProfileSoundcloud = styled.img`
  width: 50%;
  ${props => config(props).media['sm']`
    width: 47%;
  `}
`

export const SocialProfileSgae = styled.img`
  width: 52%;
  margin-top: .2em;
  ${props => config(props).media['sm']`
    width: 35%;
  `}
`

export const SecondaryTeam = styled.ul`
  margin-top: 3em;
  ${props => config(props).media['sm']`
    text-align: right;
  `}
`

export const WebLink = styled.a`
  font-family: 'Trueno', sans-serif;
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  letter-spacing: 0.01em;
`

export const Name = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Rasa Bold', serif;
`

export const Rol = styled.p`
  padding: 0;
  margin: 0;
`
const personMargin = () => css`
  margin-top: 1.5em;

  &::nth-child(1) {
    margin-top: 0;
  }
`
export const Person = styled.li`
  ${personMargin}
`
export const LinkStyle = styled.a`
 width: 45%
`
