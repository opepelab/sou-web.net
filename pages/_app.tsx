import { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import '../styles/mobile.scss'
import '../styles/img.scss'
import Head from 'next/head'
import { ThemeContext, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from '../components/Theme/Theme'
import { useState } from 'react'
import GlobalStyles from '../components/Theme/Globalstyles'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const [theme, toggleTheme] = useState('')
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ThemeProvider theme={theme === 'light' ? DarkTheme : LightTheme }>
          <GlobalStyles />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
