import React from 'react'
import { Container, Col, Row } from 'react-awesome-styled-grid'
import { TitleSection } from './press.container.style'
import { NavContainer } from '../../modules/nav/nav.container'
import { Footer } from '../../modules/footer/footer.container'

export const PressPage = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <NavContainer />
        <TitleSection>Prensa</TitleSection>
        <Row justify="center" style={{marginBottom: '2em'}}>
          <Col xs={4} md={4} lg={6} style={{ padding: '0 2em' }}></Col>
          </Row>
      </Col>
      <Footer />
    </Container>
      
  )
}
