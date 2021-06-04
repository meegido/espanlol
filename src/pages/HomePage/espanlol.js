import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../../index.styles'
import { customConf, theme } from './espanlol.style'
import { Container, Col } from 'react-awesome-styled-grid'
import { HeroContainer } from '../../modules/hero/hero.container'
import { CarouselContainer } from '../../modules/carousel/carousel.container'

export default function Espanlol() {
  return (
    <ThemeProvider theme={{awesomegrid: customConf}}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>
            <Container fluid={true} style={{padding: 0, margin: 0}}>
              <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
                <HeroContainer /> 
                <CarouselContainer />
              </Col>
            </Container>
          </main>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
