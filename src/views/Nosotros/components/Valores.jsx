

import styles from "../styles/nosotros.module.scss";
import compromisoValores from "../../../assets/icons-valores/compromisoValores.svg";
import escudoValores from "../../../assets/icons-valores/escudoValores.svg";
import gestionValores from "../../../assets/icons-valores/gestionValores.svg";
import honestidadValores from "../../../assets/icons-valores/honestidadValores.svg";

export const Valores = () => {
  return (
    <div className={styles.valuesContainer}>
      <ul className={styles.valuesList}>
        <div className={styles.valuesBox}>
          <img src={escudoValores} alt="Respeto por la historia" className={styles.valuesImage} />
          <p className={styles.valuesText}>Respeto por la historia del club</p>
        </div>
        <div className={styles.valuesBox}>
          <img src={compromisoValores} alt="Compromiso con la vuelta" className={styles.valuesImage} />
          <p className={styles.valuesText}>
            Compromiso con la vuelta a Av. La Plata
          </p>
        </div>
        <div className={styles.valuesBox}>
          <img src={honestidadValores} alt="Honestidad y transparencia" className={styles.valuesImage} />
          <p className={styles.valuesText}>Honestidad y transparencia</p>
        </div>
        <div className={styles.valuesBox}>
          <img src={gestionValores} alt="Trabajo, gestión y pertenencia" className={styles.valuesImage} />
          <p className={styles.valuesText} >Trabajo, gestión y pertenencia</p>
        </div>
      </ul>
    </div>
  );
};
