import { NextPage } from 'next'
import styles from './footer.module.css'

export const Footer: NextPage = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Christian Possidonio Software Developer</p>
    </footer>
  )
}

export default Footer
