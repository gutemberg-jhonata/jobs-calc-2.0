import styles from '../styles/components/AvatarProfile.module.css';

const profile = {
  name: "Jhonata Gutemberg",
  avatar: "https://github.com/gutemberg-jhonata.png"
};

export function AvatarProfile() {
    return (
        <a href="/profile" className={styles.avatarProfile}>
          <p>{profile.name} <span>Ver perfil</span></p>
          <img src={profile.avatar} />
        </a>
    )
}