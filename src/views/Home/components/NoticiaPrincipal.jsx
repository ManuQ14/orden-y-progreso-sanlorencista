import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getNotas } from "../../../services/cmsApi";
import { notas as notasEstaticas } from "../../Noticias/data/notas";
import styles from "../styles/home.module.scss";

// Resuelve la src de imagen: URL absoluta (CMS) o ruta relativa (legacy)
const resolveMiniatura = (value) =>
  value?.startsWith("http") ? value : `/images/miniaturas/${value}.jpg`;

export const NoticiaPrincipal = () => {
  const navigate = useNavigate();
  const [nota, setNota] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        const apiNotas = await getNotas();
        if (apiNotas && apiNotas.length > 0) {
          const primera = apiNotas[0];
          setNota({
            ...primera,
            miniatureImage: primera.miniature_image || primera.miniatureImage || "",
          });
        } else {
          setNota(notasEstaticas[0]);
        }
      } catch {
        // Fallback a datos estáticos si la API falla
        setNota(notasEstaticas[0]);
      }
    };
    cargar();
  }, []);

  if (!nota) return null;

  const handleButtonGoToNews = () => {
    navigate(`/noticias/${nota.url}`);
  };

  return (
    <div className={styles.mainNewsContainer}>
      <div className={styles.mainNew}>
        <div className={styles.mainImageContainer}>
          <img
            src={resolveMiniatura(nota.miniatureImage)}
            alt="imagen de noticia"
            className={styles.mainNewImage}
          />
        </div>
        <div className={styles.mainNewContent}>
          <h2 className={styles.principalNewTitle}>{nota.title}</h2>
          <p className={styles.noticiaContent}>
            {nota.content?.length > 180
              ? nota.content.substring(0, 180) + "..."
              : nota.content}
          </p>
          <button className={styles.readMoreButton} onClick={handleButtonGoToNews}>
            Continuar leyendo
          </button>
        </div>
      </div>
    </div>
  );
};
