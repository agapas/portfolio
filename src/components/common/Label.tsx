import styles from "./Label.module.css";

interface PropTypes {
  text: string;
}

export const Label = ({ text }: PropTypes) => {
  return <h3 className={styles.label}>{text}</h3>;
};
