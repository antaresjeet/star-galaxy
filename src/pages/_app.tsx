import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles.scss'
import ObiWan from '@/components/obi-wan'
import Head from 'next/head'

export default function MyStarWarsApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Head>
        <title>Star Galaxy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Star Galaxy is an immersive web project dedicated to the iconic Star Wars universe." />
        <meta name="keywords" content="Star Galaxy, Star Wars,  Immersive Web Project, Star Wars Universe, Jedi, Sith, The Force, Lightsaber, Galactic Empire, Rebel Alliance, Mandalorian, Bounty Hunter, Darth Vader, Luke Skywalker, Princess Leia, Han Solo, Yoda, Obi-Wan Kenobi, Anakin Skywalker, Kylo Ren, Rey Skywalker, The Mandalorian, Baby Yoda" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Star Galaxy" />
        <meta property="og:description" content="Star Galaxy is an immersive web project dedicated to the iconic Star Wars universe." />
        <meta property="og:url" content="https://star-galaxy.vercel.app/" />
        <meta property="og:image" content="https://star-galaxy.vercel.app/star-galaxy.jpeg" />
        <meta property="og:site_name" content="Star Galaxy" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Star Galaxy" />
        <meta name="twitter:description" content="Star Galaxy is an immersive web project dedicated to the iconic Star Wars universe." />
        <meta name="twitter:url" content="https://star-galaxy.vercel.app/" />
        <meta name="twitter:image" content="https://star-galaxy.vercel.app/star-galaxy.jpeg" />
        <meta name="twitter:creator" content="@jeetisxo" />

        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
    </>

  )
}