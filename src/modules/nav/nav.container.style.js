import styled, {css} from 'styled-components'

const listStyle = () => css`
  list-style-type: none;
  display: flex;
  justify-content: center;
  
  li {
    padding-right: 31px;
  }
`
export const ListContainer = styled.ul`
  ${listStyle}
`

const navLink = ({theme}) => css`
  font-family: 'Tampa';
  text-transform: uppercase;
  text-decoration: none;

`

export const NavLink = styled.a`
  ${navLink}
`
