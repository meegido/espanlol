import React from 'react'
import { Container, Col, Row } from 'react-awesome-styled-grid'
import { ListContainer, NavLink, Nav } from './nav.container.style'

export const NavContainer = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Row justify={'center'} align={'center'} style={{padding: 0, margin: 0}}>
        <Col xs={4} sm={4} md={8} lg={12} xl={12} >
          <Nav justify={'center'} align={'center'} xs={4} lg={12} xl={12}>
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
          </Nav>
       </Col>
      </Row>
    </Container>
    
    
  )
}
