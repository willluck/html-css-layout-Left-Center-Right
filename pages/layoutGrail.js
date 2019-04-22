import styles from "../styles/layoutGrail.less";

export default () => (
  <div>
    <h1>圣杯布局</h1>
    <div className={styles.content}>
      <div className={styles.center} />
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  </div>
);
