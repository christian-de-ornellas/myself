import type { NextPage } from 'next'


interface ContentProps {
  children: React.ReactNode
}

const Content: NextPage<ContentProps> = ({ children }) => {
  return <section>{children}</section>
}

export default Content
