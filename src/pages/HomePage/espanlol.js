import React from 'react'
import { GlobalStyles } from '../../index.styles'
import { Theme } from './espanlol.style'
import { Container, Col } from 'react-awesome-styled-grid'
import { HeroContainer } from '../../modules/hero/hero.container'
import { NavContainer } from '../../modules/nav/nav.container'

export default function Espanlol() {
  return (
    <Theme>
      <React.Fragment>
        <GlobalStyles />
        <Container style={{padding: 0, margin: 0}}>
          <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
            <NavContainer />
            <HeroContainer /> 
          </Col>
        </Container>
        
      </React.Fragment>
    </Theme>
  );
}
