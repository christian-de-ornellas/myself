import type { NextPage } from 'next'
import styles from './content.module.css'

interface ContentProps {
  children: React.ReactNode
}

const Content: NextPage<ContentProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>
}

export default Content
