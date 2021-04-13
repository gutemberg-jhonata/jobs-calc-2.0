import styles from '../styles/components/Notification.module.css'

const freeHours = 0;

export function Notification() {
    return (
        <span className={styles.notification}>
            <img src="images/alert-octagon.svg" alt="Alerta" />
            
            {
                freeHours <= 0 ? "Você não em horas livres" : 
                `Você tem ${freeHours} horas livres no seu dia`
            }
        </span>
    )
}