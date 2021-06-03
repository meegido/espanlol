import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'
import { Row } from 'react-awesome-styled-grid'


const responsiveNav = () => css`
  background-color: pink;
`

export const Nav = styled(Row)`
  ${responsiveNav}
`

const listStyle = () => css`
  list-style-type: none;
  display: flex;
`

export const ListContainer = styled.ul`
  ${listStyle}

  li {
    padding-left: 31px;
  }

  li:first-child {
    padding-left: 0;
  }
`

const navLink = () => css`
  font-family: 'Tampa';
  text-transform: uppercase;
  text-decoration: none;
`

export const NavLink = styled.a`
  ${navLink};
  color: ${props => props.theme.colors.body};

  ${props => config(props).media['sm']`
    font-size: 1.5em;
  `}
`
