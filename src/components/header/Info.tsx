import styles from "./Info.module.css";

interface PropTypes {
  name: string;
  occupation: string;
}

export const Info = ({ name, occupation }: PropTypes) => (
  <div className={styles.info}>
    <div className={styles.name}>{name}</div>
    <div className={styles.occupation}>{occupation?.toUpperCase()}</div>
  </div>
);
