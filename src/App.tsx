import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>Recomeçando</h1>
        <GlobalStyle/>  {/* Este componente adiciona o estilo global na aplicacao */}
      </ThemeProvider>
    </>
  )
}
