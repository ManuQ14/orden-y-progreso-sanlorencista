import React from "react";
import { useNavigate } from "react-router-dom";

import { notas } from "../../Noticias/data/notas";
import styles from "../styles/home.module.scss";

export const NoticiaPrincipal = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainNewsContainer}>
      {notas.slice(0, 1).map((nota) => {
        const handleButtonGoToNews = () => {
          navigate(`/noticias/${nota.url}`);
        };
        return (
          <div key={nota.id} className={styles.mainNew}>
            <div className={styles.mainImageContainer}>
              <img
                src={`/images/miniaturas/${nota.miniatureImage}.jpg`}
                alt="imagen de noticia"
                className={styles.mainNewImage}
              />
            </div>
            <div className={styles.mainNewContent}>
              <h2 className={styles.principalNewTitle}>{nota.title}</h2>
              <p className={styles.noticiaContent}>{nota.content}</p>
              <button
                className={styles.readMoreButton}
                onClick={handleButtonGoToNews}
              >
                Continuar leyendo
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
