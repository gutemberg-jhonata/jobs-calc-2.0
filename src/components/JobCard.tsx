import styles from '../styles/components/JobCard.module.css';

export function JobCard({ job }) {
  return (
    <div className={[styles.card, job.status].join(" ")} data-id={job.id}>
      <div className={[styles.id, styles.column].join(" ")}>{job.id}</div>
      <div className={[styles.name, styles.column].join(" ")}>{job.name}</div>
      <div className={[styles.deadline, styles.column].join(" ")}>
        <span>Prazo</span>
        <p>
          {job.status === "progress"
            ? `${job.remaining}  dias para a entrega`
            : "Prazo encerrado"}
        </p>
      </div>
      <div className={[styles.amount, styles.column].join(" ")}>
        <span>Valor</span>
        <p>R$ {job.budget.toFixed(2).replace(".", ",")} </p>
      </div>
      <div className={[styles.status, styles.badge, styles.column].join(" ")}>
        {job.status === "done" ? "Encerrado" : "Em andamento"}
      </div>
      <div className={[styles.actions, styles.column, styles.flex].join(" ")}>
        <p className="sr-only">Ações</p>
        <a
          href={`/job/${job.id}`}
          className="button white edit"
          title="Editar Job"
        >
          <img src="/images/edit-24.svg" alt="Editar Job" />
        </a>
        <button className="delete button white" title="Excluir Job">
          <img src="/images/trash-24.svg" alt="Excluir Job" />
        </button>
      </div>
    </div>
  );
}
