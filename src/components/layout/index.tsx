import { NextPage } from 'next'
import Footer from '../footer'
import Header from '../header'
import Profile from '../profile'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      <Profile />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
