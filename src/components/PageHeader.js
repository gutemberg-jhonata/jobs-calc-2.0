import styles from '../styles/components/PageHeader.module.css'

export function PageHeader({children}) {
    return (
        <header className={styles.pageHeader}>
            <div className="container">
                {children}
            </div>
        </header>
    );
}