import { NextPage } from 'next'
import Image from 'next/image'
import styles from './profile.module.css'

export const Profile: NextPage = (): JSX.Element => {
  return (
    <aside>
      <div className={styles.container}>
        <div className={styles.heading}>
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

          <div className={styles.callToAction}>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1LiYYuBPO4oa9H6McYJOMIxhVm7b6oSYJNbv_GorwWmM/edit?usp=sharing"
              rel="noreferrer"
              className={styles.link}
            >
              BAIXAR CURRÍCULO
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/profile.png"
            alt="Christian Possidonio"
            className={styles.profile}
            width={800}
            height={600}
          />
        </div>
      </div>
    </aside>
  )
}
export default Profile
