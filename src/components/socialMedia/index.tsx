import { NextPage } from 'next'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import styles from './socialMedia.module.css'

export const SocialMedia: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christian-possidonio/"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          target="_blank"
          href="https://github.com/christian-de-ornellas"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCdR1A2CRQ8AiBTbbeVjSimw"
          rel="noreferrer"
        >
          <FaYoutube size={30} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5521980044029&text=Eu tenho uma oportunidade para você!."
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={30} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
