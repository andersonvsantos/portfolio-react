import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  function changeTheme() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
