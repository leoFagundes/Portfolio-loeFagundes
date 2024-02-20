import styles from "./Loading.module.scss";

export const Loading = ({ color }: { color?: string }) => (
  <div style={{ color: "black" }} className={styles.loader}></div>
);
