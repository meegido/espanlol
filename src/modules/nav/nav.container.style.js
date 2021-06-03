import styled, {css} from 'styled-components'
import {config} from 'react-awesome-styled-grid'
import { Row } from 'react-awesome-styled-grid'


const responsiveNav = () => css`
  justify-content: space-between;
  align-items: center;
  min-height: 4vh;
`

export const Nav = styled(Row)`
  ${responsiveNav}
`

const listStyle = () => css`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 50%;
  height: 100vh;
  top: 2vh;
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(241,240,238,1) 100%) no-repeat fixed;
  align-items: center;
  transition: all .5s;

  li {
    opacity: 1;
    line-height: 30px;
    margin: 30px 0;
    transition: all .5s;
  }

  ${props => config(props).media['sm']`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
    position: relative;
    height: 4vh;
    top: 0;
    margin-right: 25px;
    transition: none;

    li {
      padding-left: 31px;
    }
  
    li:first-child {
      padding-left: 0;
    }  
  `}
`

export const ListContainer = styled.ul`
  ${listStyle}
`

const navLink = () => css`
  font-family: 'Tampa';
  text-transform: uppercase;
`

export const NavLink = styled.a`
  ${navLink};
  color: ${props => props.theme.colors.black};

`

const burguerStyle = () => css`
  display: block;
  cursor: pointer; 
  margin-left: 40px;


  ${props => config(props).media['sm']`
    display: none;
  `}
`

export const Burguer = styled.div`
  ${burguerStyle}

  div {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.black};
    margin: 5px;

  }
`
