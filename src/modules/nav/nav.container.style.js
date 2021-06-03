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
  transform: ${({open}) => open ? 'translateX(1000%)' : 'tranlsateX(0)'};


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
    transform: none;


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
  margin-left: 1em;


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
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`