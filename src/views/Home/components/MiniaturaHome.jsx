import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../Home/styles/home.module.scss";
import { getNotas } from "../../../services/cmsApi";
import { notas as notasEstaticas } from "../../Noticias/data/notas";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Resuelve la src de imagen: URL absoluta (CMS) o ruta relativa (legacy)
const resolveMiniatura = (value) =>
  value?.startsWith("http") ? value : `/images/miniaturas/${value}.jpg`;

export const MiniaturaHome = () => {
  const navigate = useNavigate();
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      try {
        const apiNotas = await getNotas();
        const normalizadas = apiNotas.map((n) => ({
          ...n,
          miniatureImage: n.miniature_image || n.miniatureImage || "",
        }));

        if (normalizadas.length > 0) {
          // Merge con estáticas para tener mínimo 5 notas para el home
          const urlsApi = new Set(normalizadas.map((n) => n.url));
          const legacy = notasEstaticas.filter((n) => !urlsApi.has(n.url));
          setNotas([...normalizadas, ...legacy]);
        } else {
          setNotas(notasEstaticas);
        }
      } catch {
        setNotas(notasEstaticas);
      }
    };
    cargar();
  }, []);

  const handleGoToNoticias = () => navigate("/noticias");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Miniaturas: notas 1 a 4 (la 0 es la principal)
  const miniaturasHome = notas.slice(1, 5);

  const renderNota = (nota) => {
    const goToNota = () => navigate(`/noticias/${nota.url}`);
    return (
      <article
        key={nota.id || nota.url}
        className={styles.miniaturaNota}
        onClick={goToNota}
      >
        <img
          src={resolveMiniatura(nota.miniatureImage)}
          alt=""
          id={styles.imageMiniatura}
        />
        <div className={styles.coverDifuminated}>
          <h3 className={styles.miniaturaTitle}>{nota.title}</h3>
        </div>
      </article>
    );
  };

  return (
    <div className={styles.lastNewsContent}>
      <div className={styles.titlesContainer}>
        <h3 className={styles.subtitleLastesNews}>Últimas noticias</h3>
        <button className={styles.seeMoreButton} onClick={handleGoToNoticias}>
          Ver más
        </button>
      </div>

      {/* Desktop */}
      <Carousel
        className={styles.newsContent}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        slidesToSlide={4}
        transitionDuration={600}
        containerClass="carousel-container"
      >
        {miniaturasHome.map(renderNota)}
      </Carousel>

      {/* Tablet */}
      <div className={styles.tabletNewsContent}>
        {miniaturasHome.map((nota) => {
          const goToNota = () => navigate(`/noticias/${nota.url}`);
          return (
            <article
              key={nota.id || nota.url}
              className={styles.miniaturaNota}
              onClick={goToNota}
            >
              <div className={styles.coverDifuminated}>
                <img
                  src={`/images/miniaturas/${nota.miniatureImage}.jpg`}
                  alt=""
                  id={styles.imageMiniatura}
                />
              </div>
              <h3 className={styles.miniaturaTitle}>{nota.title}</h3>
            </article>
          );
        })}
      </div>

      {/* Mobile */}
      <div className={styles.mobileNewsContent}>
        {miniaturasHome.map(renderNota)}
      </div>
    </div>
  );
};
