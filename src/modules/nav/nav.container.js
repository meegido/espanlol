import React from 'react'
import { Col } from 'react-awesome-styled-grid'
import { ListContainer, NavLink } from './nav.container.style'

export const NavContainer = () => {
  return (
    <Col xs={4} md={8} lg={12}>
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
      <p>hola</p>
    </Col>

   
  )
}
