import { HomeHeader } from "../components/Header";
import { Notification } from "../components/Notification";
import { AvatarProfile } from "../components/AvatarProfile";
import { StatusCount } from "../components/StatusCount";
import { NewJobButton } from "../components/NewJobButton";
import styles from "../styles/pages/Home.module.css";
import { JobCard } from "../components/JobCard";

const jobs = [
  {
    id: 1,
    name: "Jhonata Gutemberg",
    daily_hours: 24,
    total_hours: 100,
    status: "progress",
    remaining: 10,
    budget: 40,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default function Home() {
  return (
    <>
      <HomeHeader>
        <section className="top animate-up">
          <h2 className="sr-only">Homepage</h2>
          <img className="logo" src="images/logo.svg" alt="Logo" />
          <Notification />
          <AvatarProfile />
        </section>

        <div className="separator" />

        <section
          className={[styles.summary, "animate-up", "delay-1"].join(" ")}
        >
          <h2 className="sr-only">Sumário</h2>
          <StatusCount />
          <NewJobButton />
        </section>
      </HomeHeader>

      <div className="container">
        <main className={[styles.main, "animate-up", "delay-2"].join(" ")}>
          <h1 className="sr-only">Trabalhos</h1>

          <div className="cards">
            {jobs.map((job) => {
              return (
                <JobCard key={job.id} job={job} />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
