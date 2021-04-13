import styles from '../styles/components/PageHeader.module.css'

export function HomeHeader({ children }) {
    return (
        <header className={styles.pageHeader}>
            <div className="container">
                {children}
            </div>
        </header>
    );
}

export function PageHeader({ children }) {
    return (
        <header className={[styles.pageHeader, styles.inner].join(" ")}>
            <div class="container animate-up">
                <a href="/" class="back">
                    <img src="/images/back.svg" alt="" />
                </a>
                <h1>{children}</h1>
            </div>
        </header>
    )
}