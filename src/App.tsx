import { ThemeProvider } from 'styled-components'

import { MainPage } from 'pages'
import { GlobalStyles, Theme } from 'styles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
