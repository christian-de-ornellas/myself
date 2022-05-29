import { NextPage } from 'next'
import Image from 'next/image'
import brand from '../../../public/brand-dark.png'
import SocialMedia from '../socialMedia'
import styles from './header.module.css'

export const Header: NextPage = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <Image
          alt="Christian Possidonio Programador"
          width={313}
          height={40}
          src={brand}
        />
        <SocialMedia />
      </div>
    </header>
  )
}

export default Header
