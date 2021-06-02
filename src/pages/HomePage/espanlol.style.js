import { createGlobalStyle } from 'styled-components/macro'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    darkRed: '#D50E00',
    red: 'EF0000',
    black: '#030303',
    white: '#fff',
    body: '#2B1C19'
  }
}

const customConf = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(241,240,238,1) 100%) no-repeat fixed;
    font-family: Helvetica;
    color: ${theme.colors.body};
    font-size: 16px; 
  }
`

export const Theme = ({ children }) => (
  <ThemeProvider theme={{theme, awesomegrid: customConf}}>{children}</ThemeProvider>
)
