import React, {useState} from 'react'
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
            <NavLink href="/">Singles</NavLink>
          </li>
          <li>
            <NavLink href="/">Prensa</NavLink>
          </li>
          <li>
            <NavLink href="/">Proyecto</NavLink>
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
