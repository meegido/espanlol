import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './index.styles'
import { customConf, theme } from './espanlol.style'
import { HomeContainer } from './pages/HomePage/home.container'
import { NavContainer } from './modules/nav/nav.container'


export default function Espanlol() {
  return (
    <ThemeProvider theme={{awesomegrid: customConf}}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>
            <NavContainer />
            <HomeContainer />
          </main>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
