import { NextPage } from "next"
import Footer from "../footer"
import Header from "../header"
import styles from './layout.module.css'

interface Props {
    children:  React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.children}>{children}</main>
        <Footer />
      </div>
    )
  }
  
  export default Layout