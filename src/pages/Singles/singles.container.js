import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'

import { TitleSection } from './singles.container.style'
import { NavContainer } from '../../modules/nav/nav.container'
import { Footer } from '../../modules/footer/footer.container'

export const SinglesPage = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}  >
        <NavContainer />
        <TitleSection>Proyecto</TitleSection>

      </Col>
      <Footer />
    </Container>
  )
}
