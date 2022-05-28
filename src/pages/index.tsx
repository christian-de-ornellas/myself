import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Possidonio - Desenvolvedor de Software</title>
        <meta name="description" content="Um programador apaixonado por resolver problemas usando muita tecnologia." />
        <meta name="keywords" content="Programação, Desenvolvedor de software, Frontend, Backend, FullStack, Javascript, Typescript, ReactJs, React Native, NextJs, Node" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <h2>Content</h2>
      </Layout>
    </div>
  )
}

export default Home
