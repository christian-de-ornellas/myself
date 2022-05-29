import { NextPage } from 'next'
import Header from '../header'
import Profile from '../profile'
import styles from './layout.module.css'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      <Profile />
      <main className={styles.content}>{children}</main>
    </div>
  )
}
export default Layout
