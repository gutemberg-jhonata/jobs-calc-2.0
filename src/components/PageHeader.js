import styles from '../styles/components/PageHeader.module.css'

export function PageHeader() {
    return (
        <header className={styles.pageHeader}>
            {/*<div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            </div>*/}
            <div className={styles.container}>
                <section className={[styles.top, styles.animateUp].join(" ")}>
                    <h2 className={styles.srOnly}>Homepage</h2>
                    <img className={styles.logo} src="images/logo.svg" alt="Logo" />
                    <span className={styles.notification}>
                        <img src="images/alert-octagon.svg" alt="Alerta" />
                            Você não em horas livres
                        {
                        /*
                        <% if (freeHours <= 0) { %>
                        Você não em horas livres
                        <% } else { %>
                        Você tem <%= freeHours %> horas livres no seu dia
                        <% } %> 
                        */
                        }
                    </span>
                    <a href="/profile" className={styles.avatarProfile}>
                        <p>{/* <%= profile.name %> */} <span>Ver perfil</span></p>
                        <img src="<%= profile.avatar %>" />
                    </a>
                </section>

                <div className={styles.separator} />

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
            </div>
        </header>
    );
}