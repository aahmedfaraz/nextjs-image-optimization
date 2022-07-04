import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          With Fixed <span className={styles.highlight}>Width</span> and <span className={styles.highlight}>Height</span> and Object-Fit <span className={styles.highlight}>Contain</span>
        </h1>
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={250} height={200} objectFit="contain" alt="jeep-img" />
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={250} height={250} objectFit="contain"  alt="jeep-img" />
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={400} height={250} objectFit="contain"  alt="jeep-img" />
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={250} height={300} objectFit="contain"  alt="jeep-img" />
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={300} height={350} objectFit="contain"  alt="jeep-img" />
        <Image className={styles.img} src="https://i.pinimg.com/originals/b5/47/98/b54798f53bca8c864637eee3ff47497e.jpg" width={600} height={350} objectFit="contain"  alt="jeep-img" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home