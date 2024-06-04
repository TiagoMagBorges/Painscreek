import Head from 'next/head'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Screen" />
        </Head>


      </div>
  );
}
