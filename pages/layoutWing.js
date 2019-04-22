import styles from "../styles/layoutWing.less";

export default () => (
  <div>
    <h1>双飞翼布局</h1>
    <div>
      <div className={styles.main}>
        <div className={styles.center} />
      </div>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  </div>
);
