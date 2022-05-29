import { NextPage } from 'next'
import Image from 'next/image'
import styles from './profile.module.css'
import { IoLogoWhatsapp } from 'react-icons/io5'

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
              href="https://api.whatsapp.com/send?phone=5521980044029&text=Eu tenho uma oportunidade para você!."
              rel="noreferrer"
              className={styles.link}
            >
              <IoLogoWhatsapp /> Chamar no WhatsApp
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
