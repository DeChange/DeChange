import { AppProvider } from '@/context/AppContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider } from 'thirdweb/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThirdwebProvider>
  )
}
