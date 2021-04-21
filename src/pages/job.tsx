import { PageHeader } from "../components/Header";
import styles from "../styles/pages/Job.module.css";

export default function Job() {
  return (
    <>
      <PageHeader>Adicionar Novo Job</PageHeader>
      <div className="container flex animate-up delay-2">
        <main>
          <form id="form-job" action="/job" method="POST">
            <fieldset>
              <legend>Dados do Job</legend>
              <div className="separator light" />

              <div className="input-wrapper">
                <label>Nome do Job</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>
                    Quantas horas <br />
                    por dia vai dedicar ao job?
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="daily-hours"
                    name="dailyHours"
                  />
                </div>

                <div className="input-wrapper">
                  <label>
                    Estimativa de <br />
                    horas para esse Job?
                  </label>
                  <input type="number" id="total-hours" name="totalHours" />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
        <aside className={[styles.aside, "card"].join(" ")}>
          <img src="/images/money-gray.svg" alt="Imagem de Dinheiro" />
          <p>Preencha os dados ao lado para ver o valor do projeto</p>
          <div className="button-group">
            <button
              className={[styles.button, "button green"].join(" ")}
              form="form-job"
              type="submit"
              title="Salvar Dados"
            >
              Salvar
            </button>
            <a href="/" className={[styles.button, "button gray"].join(" ")}>
              <img
                src="/images/trash-24.svg"
                alt="Cancelar cadastro"
                title="Cancelar cadastro"
              />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
