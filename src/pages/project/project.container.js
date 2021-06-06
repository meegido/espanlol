import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { NavContainer } from '../../modules/nav/nav.container'


export const ProjectPage = () => {

  return(
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <NavContainer />
      </Col>
    </Container>
  )
}
