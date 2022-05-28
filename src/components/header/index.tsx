import { NextPage } from "next"
import styles from './header.module.css'
import Image from 'next/image'
import brand from '../../../public/images/brand-dark.png'  
import SocialMedia from "../socialMedia"


const Header: NextPage = (): JSX.Element => {
    return (
      <div className={styles.container}>
        <Image
        src={brand}
        alt="Christian Possidonio Developer"
        width={313}
        height={40}
      />
      <SocialMedia />
      </div>
    )
  }
  
  export default Header