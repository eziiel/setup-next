import React from "react"
import { AppProps } from "next/app"
import Global from "../styles/global"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"

const MyApp: React.FC = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Global/>
    </ThemeProvider>
  )
}

export default MyApp
