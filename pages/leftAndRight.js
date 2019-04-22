import styles from "../styles/leftAndRight.less";

export default () => (
  <div>
    <h1>左右绝对定位</h1>
    <div>
      <div className={styles.left} />
      <div className={styles.right} />
      <div className={styles.center} />
    </div>
  </div>
);
