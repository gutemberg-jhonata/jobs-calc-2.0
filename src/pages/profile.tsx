import { PageHeader } from "../components/Header";
import styles from "../styles/pages/Profile.module.css";

const profile = {
  name: "Jhonata Gutemberg",
  valueHour: 75,
  avatar: "https://github.com/gutemberg-jhonata.png",
  hoursPerDay: 8,
  daysPerWeek: 7,
  vacationPerYear: 4,
  monthlyBudget: 3000,
};

const handleSubmit = () => {
  console.log(profile);
}

export default function Profile() {
  return (
    <>
      <PageHeader>Meu Perfil</PageHeader>
      <div
        className={[
          styles.container,
          "container",
          "animate-up",
          "delay-2",
        ].join(" ")}
      >
        <aside className={[styles.card, styles.aside].join(" ")}>
          <img src={profile.avatar} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>
            O valor da sua hora é <br />
            <strong>R$ {profile.valueHour.toFixed(2).replace(".", ",")}</strong>
          </p>
          <button
            className={[styles.button, styles.green].join(" ")}
            form="form-profile"
            type="submit"
          >
            Salvar dados
          </button>
        </aside>
        
        <main className={styles.main}>
          <form id="form-profile" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados do perfil</legend>
              <div className="separator light"></div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                  />
                </div>

                <div className="input-wrapper">
                  <label>Link da foto</label>
                  <input
                    placeholder="https://"
                    type="url"
                    value={profile.avatar}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Planejamento</legend>
              <div className="separator light" />

              <div className="input-group">
                <div className="input-wrapper">
                  <label>
                    Quanto eu <br />
                    quero ganhar por mês?
                  </label>
                  <input
                    type="amount"
                    step="0.1"
                    placeholder="R$"
                    value={profile.monthlyBudget}
                  />
                </div>

                <div className="input-wrapper">
                  <label>
                    Quantas horas <br />
                    quero trabalhar por dia?
                  </label>
                  <input type="number" value={profile.hoursPerDay} />
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label>
                    Quantos dias <br />
                    quero trabalhar por semana?
                  </label>
                  <input type="number" value={profile.daysPerWeek} />
                </div>

                <div className="input-wrapper">
                  <label>
                    Quantas semanas <br />
                    por ano você quer tirar férias?
                  </label>
                  <input type="number" value={profile.vacationPerYear} />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </>
  );
}
