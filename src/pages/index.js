import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Screen" />
          <link rel="icon" href="/logo.png" />
        </Head>

        <nav className={styles.navbar}>
          <a href="#" onClick={() => window.location.href = '/login'}>Login</a>
        </nav>

      </div>
  )
}
