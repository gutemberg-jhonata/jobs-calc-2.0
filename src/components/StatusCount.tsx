import styles from "../styles/components/StatusCount.module.css";

const statusCount = {
  total: 2,
  progress: 1,
  done: 1,
};

export function StatusCount() {
  return (
    <div className={styles.info}>
      <div className={styles.total}>
        <strong>{statusCount.total}</strong>
        Projetos ao total
      </div>

      <div className={styles.inProgress}>
        <strong>{statusCount.progress}</strong>
        Em andamento
      </div>

      <div className={styles.finished}>
        <strong>{statusCount.done}</strong>
        Encerrados
      </div>
    </div>
  );
}
