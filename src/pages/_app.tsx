import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles.scss'
export default function MyStarWarsApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}