import styles from "./Badge.module.scss";

export default function Badge({ children, type }) {
  
  return <span className={styles.badge}>{children}</span>
}