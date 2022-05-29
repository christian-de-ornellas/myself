import { NextPage } from 'next'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import styles from './socialMedia.module.css'

export const SocialMedia: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a href="https://www.linkedin.com/in/christian-possidonio/">
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className={styles.item}>
        <a href="https://github.com/christian-de-ornellas">
          <FaGithub size={30} />
        </a>
      </div>
      <div className={styles.item}>
        <a href="https://www.youtube.com/channel/UCdR1A2CRQ8AiBTbbeVjSimw">
          <FaYoutube size={30} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
