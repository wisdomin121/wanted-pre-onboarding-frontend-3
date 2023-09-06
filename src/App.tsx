import { ThemeProvider, styled } from 'styled-components'

import { MainPage } from 'pages'
import { GlobalStyles, Theme } from 'styles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <CommonLayout>
        <MainPage />
      </CommonLayout>
    </ThemeProvider>
  )
}

export default App

const CommonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
