import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.css'
import Layout from '../components/layout'

const Home: NextPage = (): JSX.Element=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Possidonio - Desenvolvedor de Software</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Sou um apaixonado por programação e criação de produtos digitais web e mobile." />
        <meta name="author" content="Christian de Ornellas Possidonio" />
        <meta name="keywords" content="programação, desenvolvedor de software, javascript, html,css, reactjs, react native, nextjs, node" />
        <link rel="icon" type="image/png" href="../assets/images/icon.png" />
      </Head>
      <Layout>
        <><h1>Layout component</h1><p>lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consect </p></>
      </Layout>
    </div>
  )
}

export default Home
