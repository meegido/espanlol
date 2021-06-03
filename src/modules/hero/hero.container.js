import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { HeroImage } from './hero.component.style'

export const HeroContainer = () => {
    return (
      <Container fluid={true} style={{padding: 0, margin: 0}}>
        <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
            <HeroImage  />
        </Col>
      </Container>
      
    )
}
