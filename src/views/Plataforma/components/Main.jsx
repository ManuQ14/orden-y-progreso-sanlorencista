import styles from "../styles/plataforma.module.scss";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <h1 className={styles.mainTitlePlatform}>Plan de Gobierno</h1>
        <Link
          className={styles.buttonToPDF}
          to="/plan-de-gobierno.pdf"
          target="_blank"
        >
          Mirá el plan de gobierno acá
        </Link>
      </div>
    </>
  );
};
