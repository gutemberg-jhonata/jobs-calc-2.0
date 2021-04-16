import { PageHeader } from "../components/Header";

const profile = {
  name: "Jhonata Gutemberg",
  valueHour: 75,
  avatar: "https://github.com/gutemberg-jhonata.png",
  hoursPerDay: 8,
  daysPerWeek: 7,
  vacationPerYear: 4,
  monthlyBudget: 3000
};

export default function Profile() {
  return (
    <>
      <PageHeader>Meu Perfil</PageHeader>
      <div className="container animate-up delay-2">
        <aside className="card">
          <img src={profile.avatar} alt={profile.name} />
          <h2>{profile.name}</h2>
          <p>
            O valor da sua hora é <br />
            <strong>R$ {profile.valueHour.toFixed(2).replace(".", ",")}</strong>
          </p>
          <button className="button green" form="form-profile" type="submit">
            Salvar dados
          </button>
        </aside>
        <main>
          <form id="form-profile" method="POST" action="/profile">
            <fieldset>
              <legend>Dados do perfil</legend>
              <div className="separator light"></div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label for="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                  />
                </div>

                <div className="input-wrapper">
                  <label for="avatar">Link da foto</label>
                  <input
                    placeholder="https://"
                    type="url"
                    id="avatar"
                    name="avatar"
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
                  <label for="monthly-budget">
                    Quanto eu <br />
                    quero ganhar por mês?
                  </label>
                  <input
                    type="amount"
                    step="0.1"
                    id="monthly-budget"
                    name="monthlyBudget"
                    placeholder="R$"
                    value={profile.monthlyBudget}
                  />
                </div>

                <div className="input-wrapper">
                  <label for="hoursPerDay">
                    Quantas horas <br />
                    quero trabalhar por dia?
                  </label>
                  <input
                    type="number"
                    id="hours-per-day"
                    name="hoursPerDay"
                    value={profile.hoursPerDay}
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-wrapper">
                  <label for="days-per-week">
                    Quantos dias <br />
                    quero trabalhar por semana?
                  </label>
                  <input
                    type="number"
                    id="days-per-week"
                    name="daysPerWeek"
                    value={profile.daysPerWeek}
                  />
                </div>

                <div className="input-wrapper">
                  <label for="vacation-per-year">
                    Quantas semanas <br />
                    por ano você quer tirar férias?
                  </label>
                  <input
                    type="number"
                    id="vacation-per-year"
                    name="vacationPerYear"
                    value={profile.vacationPerYear}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    </>
  );
}
