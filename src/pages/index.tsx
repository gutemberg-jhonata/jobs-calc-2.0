import { HomeHeader } from "../components/Header";
import { Notification } from "../components/Notification";
import { AvatarProfile } from "../components/AvatarProfile";
import { StatusCount } from "../components/StatusCount";
import { NewJobButton } from "../components/NewJobButton";
import styles from "../styles/pages/Home.module.css";

export default function Home() {

  return (
    <HomeHeader>
      <section className="top animate-up">
        <h2 className="sr-only">Homepage</h2>
        <img className="logo" src="images/logo.svg" alt="Logo" />
        <Notification />
        <AvatarProfile />
      </section>

      <div className="separator" />

      <section className={[styles.summary, "animate-up", "delay-1"].join(" ")}>
        <h2 className="sr-only">Sumário</h2>
        <StatusCount />      
        <NewJobButton />
      </section>
    </HomeHeader>
  );
}
