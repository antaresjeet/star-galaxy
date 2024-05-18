import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'

import '../styles.scss'
import ObiWan from '@/components/obi-wan'
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
      <ObiWan />
      <Footer />
      <video autoPlay muted loop playsInline className='object-cover w-screen h-screen fixed z-[-1] left-0 top-0'>
        <source src={'/stars-in-space.mp4'} type="video/mp4" />
      </video>
    </div>
  )
}