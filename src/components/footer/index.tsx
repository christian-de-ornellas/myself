import { NextPage } from "next"
import styles from './footer.module.css'

const Footer: NextPage = (): JSX.Element => {
    return (
      <footer className={styles.container}>
       <p>By Christian Possidonio</p>
      </footer>
    )
  }
  
  export default Footer