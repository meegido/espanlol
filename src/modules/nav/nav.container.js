import React from 'react'
import { Container } from 'react-awesome-styled-grid'
import { ListContainer, NavLink, Nav, Burguer } from './nav.container.style'

export const NavContainer = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Nav align='center' justify={'space-around'}>
        <ListContainer>
          <li>
            <NavLink href="/">Disco</NavLink>
          </li>
          <li>
            <NavLink href="/">Libro</NavLink>
          </li>
          <li>
            <NavLink href="/">Singles</NavLink>
          </li>
          <li>
            <NavLink href="/">Prensa</NavLink>
          </li>
          <li>
            <NavLink href="/">Proyecto</NavLink>
          </li>
        
        </ListContainer>
        <Burguer>
          <div></div>
          <div></div>
          <div></div>
        </Burguer>
      </Nav>

    </Container>
    
    
  )
}
