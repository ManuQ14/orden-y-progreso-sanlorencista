import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../Home/styles/home.module.scss";
import { notas } from "../../Noticias/data/notas";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MiniaturaHome = () => {
  const navigate = useNavigate();

  const handleButtonGoToNews = () => {
    navigate("/noticias");
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.lastNewsContent}>
      <div className={styles.titlesContainer}>
        <h3 className={styles.subtitleLastesNews}>Últimas noticias</h3>
        <button className={styles.seeMoreButton} onClick={handleButtonGoToNews}>
          Ver más
        </button>
      </div>
      {/*Desktop */}
      <Carousel
        className={styles.newsContent}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        autoPlaySpeed={500}
        keyBoardControl={true}
        slidesToSlide={4}
        transitionDuration={600}
        containerClass="carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}

        //itemClass="carousel-item-padding-right-560px"
      >
        {notas.slice(1, 5).map((nota) => {
          const handleButtonGoToNews = () => {
            navigate(`/noticias/${nota.url}`);
          };

          return (
            <article
              key={nota.id}
              className={styles.miniaturaNota}
              onClick={handleButtonGoToNews}
            >
              <img
                src={`/images/miniaturas/${nota.miniatureImage}.jpg`}
                alt=""
                id={styles.imageMiniatura}
              />
              <div className={styles.coverDifuminated}>
                <h3 className={styles.miniaturaTitle}>{nota.title}</h3>
              </div>
            </article>
          );
        })}
      </Carousel>
      {/*Tablet */}
      <div className={styles.tabletNewsContent}>
        {notas.slice(1, 5).map((nota) => {
          const handleButtonGoToNews = () => {
            navigate(`/noticias/${nota.url}`);
          };
          return (
            <article
              key={nota.id}
              className={styles.miniaturaNota}
              onClick={handleButtonGoToNews}
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
      {/*Mobile */}
      <div className={styles.mobileNewsContent}>
        {notas.slice(1, 5).map((nota) => {
          const handleButtonGoToNews = () => {
            navigate(`/noticias/${nota.url}`);
          };
          return (
            <article
              key={nota.id}
              className={styles.miniaturaNota}
              onClick={handleButtonGoToNews}
            >
              <img
                src={`/images/miniaturas/${nota.miniatureImage}.jpg`}
                alt=""
                id={styles.imageMiniatura}
              />
              <div className={styles.coverDifuminated}>
                <h3 className={styles.miniaturaTitle}>{nota.title}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
