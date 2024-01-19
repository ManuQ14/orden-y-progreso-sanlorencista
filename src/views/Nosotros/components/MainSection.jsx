

import styles from "../styles/nosotros.module.scss";
import redLine from "../../../assets/icons/red-line.svg";
import imagenOyP from "../../../assets/images/equipo-oyp.jpg";

export const MainSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.contentBox}>
          <div className={styles.titleContainer}>
            <h3 className={styles.titleSection}>Quienes somos</h3>
            <img src={redLine} alt="linea roja de separación" className={styles.redLine} />
          </div>
          <div>
            <p className={styles.contentSection}>
              Orden y Progreso SanLorencista es una agrupación política
              conformada por socias y socios identificados con el camino marcado
              por la figura de Enrique Pinto y su gestión como presidente de San
              Lorenzo. <br />
              Somos un grupo de socias y socios refundadores que creemos
              fielmente en que existe un San Lorenzo mejor, y que para ello se
              requiere de un trabajo mancomunado y desinteresados de todos y
              todas, que es lo que venimos a proponer. <br />
              Los pasos que guíen nuestras acciones son los que dieron Lorenzo
              Massa, Scaramusso, Larrandart, Bidegain y el propio Pinto para
              recuperar la verdadera identidad, respetando nuestra rica y gran
              historia. <br />
              Nuestra visión es volver a ser un club modelo, pujante, con Av. La
              Plata como centro y de allí al mundo, con logros deportivos y
              sociales, abierto a los socios y socias y profundamente
              democrático.
            </p>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.titleContainer}>
            <h3 className={styles.titleSection}>Nuestros valores</h3>
            <img src={redLine} alt="Linea roja de separación" className={styles.redLine} />
          </div>
          <p className={styles.contentSection}>
            Los cimientos de nuestros valores se fundan en el
            orden y el progreso. De allí nace
            nuestro nombre, del <strong>respeto</strong> por la historia: por
            aquellos y aquellas que con ordenados actos de gobierno llevaron a
            San Lorenzo a ser una institución modelo. <br />
            Una de nuestras columnas es el <strong>compromiso</strong>, ese que
            hemos asumido de no claudicar hasta que se construya de nuevo el
            estadio en Av. La Plata:<strong> identidad</strong> y
            <strong> sentido de pertenencia</strong>. <br />
            El trabajo y la gestión 
            basados en la honestidad y la{" "}
            transparencia, serán el camino a recorrer.
            <br />
            Tenemos una premisa:{" "}
            <span className={styles.primeroSanLorenzoSiempre}>
              Primero San Lorenzo Siempre.
            </span>
          </p>
        </div>
        <img
          src={imagenOyP}
          alt="Foto grupal de Orden y Progreso Sanlorencista"
          className={styles.mainPhoto}
        />
      </div>
    </>
  );
};
