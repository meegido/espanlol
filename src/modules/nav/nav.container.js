import React, {useState} from 'react'
import { Link } from "react-router-dom";


import { Container } from 'react-awesome-styled-grid'
import { ListContainer, NavLinkStyle, Nav, Burguer } from './nav.container.style'

export const NavContainer = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => setOpen(!open)
  
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Nav align='center' justify={'space-around'}>
        <ListContainer open={open} style={{padding: 0, margin: 0}}>
            <li>
              <Link to="/">
                <NavLinkStyle>Home</NavLinkStyle>
              </Link>
            </li>
            <li>
              <Link to="/project">
                <NavLinkStyle>Proyecto</NavLinkStyle>
              </Link>
            </li>
            <li>
              <Link to="/singles">
                <NavLinkStyle>Singles</NavLinkStyle>
              </Link>
            </li>
            <li>
              <Link to="/press">
                <NavLinkStyle>Prensa</NavLinkStyle>
              </Link>
            </li>
        </ListContainer>
        <Burguer open={open} onClick={handleClick}>
          <div />
          <div />
          <div />
        </Burguer>
      </Nav>
    </Container>
    
    
  )
}
