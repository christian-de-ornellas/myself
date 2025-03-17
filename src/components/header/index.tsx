import { NextPage } from 'next'
import Image from 'next/image'
import brand from '../../../public/brand-dark.png'
import styles from './header.module.css'

export const Header: NextPage = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <Image
          alt="Christian Possidonio - Desenvolvedor de Software"
          width={313}
          height={40}
          src={brand}
        />
      </div>
    </header>
  )
}

export default Header
