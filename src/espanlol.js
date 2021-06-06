import React from 'react'
import {Router} from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './index.styles'
import { customConf, theme } from './espanlol.style'
import { HomeContainer } from './pages/HomePage/home.container'
import { ProjectPage } from './pages/project/project.container'


export default function Espanlol() {
  return (
    <ThemeProvider theme={{awesomegrid: customConf}}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>
          <Router>
            <HomeContainer path="/"/>
            <ProjectPage path="/project" />
          </Router>
          </main>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
