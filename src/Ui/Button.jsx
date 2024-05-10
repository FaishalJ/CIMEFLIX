import styles from "./Button.module.scss";
export default function Button({ type, children, onClick }) {
  return <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>;
}