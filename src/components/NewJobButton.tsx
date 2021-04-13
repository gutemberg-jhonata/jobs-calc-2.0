import styles from "../styles/components/NewJobButton.module.css"

export function NewJobButton() {
    return (
        <a className={[styles.button, styles.orange].join(" ")} href="/job">
          <span>
            <img src="images/plus-24.svg" alt="Novo Job" />
          </span>
          Adicionar novo job
        </a>
    )
}