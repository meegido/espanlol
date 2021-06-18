import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './index.styles'
import { customConf, theme } from './espanlol.style'
import { HomeContainer } from './pages/HomePage/home.container'
import { ProjectPage } from './pages/project/project.container'
import { SinglesPage } from './pages/Singles/singles.container'
import { PressPage } from './pages/Press/press.container'

export default function Espanlol() {
  return (
    <ThemeProvider theme={{awesomegrid: customConf}}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main>
            <Router>
              <Route exact path="/">
                <HomeContainer />
              </Route>
              <Route path="/project">
                <ProjectPage />
              </Route>
              <Route path="/singles">
                <SinglesPage />
              </Route>
              <Route  path="press">
                <PressPage />
              </Route>
            </Router>
          </main>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
