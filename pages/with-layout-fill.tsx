import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AhmedSpecialImageElement from '../components/AhmedSpecialImageElement'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahmed | Image Optimization</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          With No <span className={styles.highlight}>Width</span> and <span className={styles.highlight}>Height</span>, only Layout <span className={styles.highlight}>Fill</span>
        </h1>
        <AhmedSpecialImageElement width={250} height="200" layout="fill" />
        <AhmedSpecialImageElement width={250} height="250" layout="fill" />
        <AhmedSpecialImageElement width={400} height="250" layout="fill" />
        <AhmedSpecialImageElement width={250} height="300" layout="fill" />
        <AhmedSpecialImageElement width={300} height="350" layout="fill" />
        <AhmedSpecialImageElement width={600} height="350" layout="fill" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            VERCEL
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;