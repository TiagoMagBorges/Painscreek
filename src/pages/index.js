import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Screen"/>
          <link rel="icon" href="/logo.png"/>
        </Head>

        <Navbar/>
      </>
  )
}
