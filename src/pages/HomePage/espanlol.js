import { HeroContainer } from '../../modules/hero/hero.container'
import { GlobalStyle } from './espanlol.style'
import { Theme } from './espanlol.style'
import { Container, Row, Col } from 'react-awesome-styled-grid'

import React from 'react'

export default function Espanlol() {
  return (
    <Theme>
      <React.Fragment>
        <Col xs={4} md={8} lg={12} style={{padding: 0}}>
          <HeroContainer /> 
        </Col>
        <GlobalStyle />
      </React.Fragment>
    </Theme>
  );
}
