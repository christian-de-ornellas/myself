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
            Sou um <u>desenvolvedor Full-Stack</u>, trabalho com desenvolvimento
            de sistemas desde 2013 e tive a oportunidade de trabalhar com
            diversas tecnologias, hoje meu foco principal é no{' '}
            <i>JavaScript e todo o seu ecossistema</i> para o desenvolvimento
            web e mobile.
          </h3>
        </div>
        <div>
          <Image
            src="/profile3.png"
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
