import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'

export default function MyStarWarsApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}