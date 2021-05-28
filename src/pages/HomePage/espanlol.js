import { HeroContainer } from '../../modules/hero/hero.container'
import { GlobalStyle } from './espanlol.style'
import { ThemeProvider } from 'styled-components'
import React from 'react'

export default function Espanlol() {
  return (
    <ThemeProvider theme={{}}>
      <React.Fragment>
          <HeroContainer />      
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
}
