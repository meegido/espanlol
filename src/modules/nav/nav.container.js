import React, {useState} from 'react'
import {Link} from '@reach/router'

import { Container } from 'react-awesome-styled-grid'
import { ListContainer, NavLink, Nav, Burguer } from './nav.container.style'

export const NavContainer = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => setOpen(!open)
  
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Nav align='center' justify={'space-around'}>
        <ListContainer open={open} style={{padding: 0, margin: 0}}>
        <li>
            <Link to="/">
              <NavLink href="/">Home</NavLink>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <NavLink href="/">Proyecto</NavLink>
            </Link>
          </li>
          <li>
            <Link to="/singles">
              <NavLink href="/">Singles</NavLink>
            </Link>
          </li>
          <li>
            <Link to="/press">
              <NavLink href="/">Prensa</NavLink>
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
