import type { NextPage } from 'next'
import styles from './pageTitle.module.css'

interface PageTitleProps {
  title: string
}

const PageTitle: NextPage<PageTitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2>
        <mark>{title}</mark>
      </h2>
    </div>
  )
}

export default PageTitle
