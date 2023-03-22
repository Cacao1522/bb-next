import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </Head>
  return <Component {...pageProps} />
}
