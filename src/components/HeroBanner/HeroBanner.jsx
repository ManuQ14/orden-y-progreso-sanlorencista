import styles from "./HeroBanner.module.scss";

export const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vamos a Reconstruir San Lorenzo</h1>
        <div className={styles.redLine}></div>
      </div>
    </section>
  );
};
