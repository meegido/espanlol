import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/project" component={ProjectPage} />
                <Route path="/singles" component={SinglesPage} />
                <Route path="/press" component={PressPage} />
              </Switch>
            </Router>
          </main>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
