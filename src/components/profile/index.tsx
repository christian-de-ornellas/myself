import { NextPage } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './profile.module.css'
import SocialMedia from '../socialMedia'

export const Profile: NextPage = (): JSX.Element => {
  return (
    <aside>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.png"
            alt="Christian Possidonio"
            className={styles.profile}
            width={150}
            height={150}
          />
        </motion.div>

        <SocialMedia />

        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Desenvolvedor Web & Mobile</h1>
          <h3>
            Sou um <u>desenvolvedor de software</u> desde 2013 e tive a
            oportunidade de trabalhar com diversas tecnologias e em diferentes
            projetos nacionais e internacionais, e nos últimos anos atuei em
            diversas aplicações utilizando o{' '}
            <i>
              JavaScript e todo o seu ecossistema para o desenvolvimento web e
              mobile.
            </i>
          </h3>

          <motion.div
            className={styles.callToAction}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1LiYYuBPO4oa9H6McYJOMIxhVm7b6oSYJNbv_GorwWmM/edit?usp=sharing"
              rel="noreferrer"
              className={styles.link}
            >
              BAIXAR CURRÍCULO
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </aside>
  )
}

export default Profile
