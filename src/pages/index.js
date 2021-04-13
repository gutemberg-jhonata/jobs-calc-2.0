import { HomeHeader } from '../components/PageHeader'
import { Notification } from '../components/Notification'
import { AvatarProfile } from '../components/AvatarProfile'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <HomeHeader>
      <section className={["top", styles.animateUp].join(" ")}>
        <h2 className="srOnly">Homepage</h2>
        <img className="logo" src="images/logo.svg" alt="Logo" />
        <Notification />
        <AvatarProfile />
      </section>

      <div className="separator" />

      {/*
                    <section className={styles.summary} className={[styles.animateUp, styles.delay1]}>
                    <h2 className={styles.srOnly}>Sumário</h2>

                    <div className={styles.info}>
                        <div className={styles.total}>
                            <strong>{ <%= statusCount.total %> }</strong>
                            Projetos ao total
                        </div>
                    </div>


                    <div className={styles.inProgress}>
                        <strong>{ <%= statusCount.progress %> }</strong>
                        Em andamento
                    </div>
                    <div className={styles.finished}>
                        <strong>{ <%= statusCount.done %> }</strong>
                        Encerrados
                    </div>
                    
                    <a className={[styles.button, styles.orange]} href="/job">
                        <span>
                            <img src="images/plus-24.svg" alt="Novo Job" />
                        </span>
                        Adicionar novo job
                    </a>
                </section>
                */}
    </HomeHeader>
  )
}
