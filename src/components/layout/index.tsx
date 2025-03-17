import { NextPage } from 'next'
import Profile from '../profile'
import styles from './layout.module.css'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Profile />
      <main className={styles.content}>{children}</main>
    </div>
  )
}
export default Layout
