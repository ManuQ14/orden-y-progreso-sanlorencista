import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import { notas } from "../data/notas";

import styles from "../styles/laVuelta.module.scss";

/*imports de iconos de los botones de compartir noticia */
import facebookShare from "../../../assets/icons/shareIcons/facebookShare.svg";
import twitterShare from "../../../assets/icons/shareIcons/twitterShare.svg";
import whatsappShare from "../../../assets/icons/shareIcons/whatsappShare.svg";

import { Header } from "./Header";

export const NoticiaVuelta = () => {
  const [noticia, setNoticia] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImage = () => {
    setTimeout(() => {
      try {
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }, 750);
  };

  useEffect(() => {
    let noticias = notas.filter((nota) => nota.url === params.url);
    setNoticia(noticias[0]);
    getImage();
  }, [params.url]);

  const loadingImage = () => {
    if (error !== "") {
      return <div>Hubo algún error al cargar la noticia</div>;
    } else if (loading === true) {
      return (
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else if (loading === false && error === "") {
      return (
        <>
          <Helmet>
          {/*OG Meta Tags */  }
          <meta name="description" content={`${noticia.parrafoUno} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`} />
          <link rel="canonical" href={`https://www.oypsanlorencista.com/%23/la-vuelta/${noticia.url}`} />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${noticia.title} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`} />
          <meta property="og:description" content={noticia.parrafoUno} />
          <meta property="og:url" content={`https://www.oypsanlorencista.com/#/la-vuelta/${noticia.url}`} />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content={`https://oypsanlorencista.com/images/laVuelta/${params.url}/${noticia.nameImage}.jpg`} />
          <meta property="og:image:url" content={`https://oypsanlorencista.com/images/laVuelta/${params.url}/${noticia.nameImage}.jpg`} />
          <meta property="og:image:secure_url" content={`https://oypsanlorencista.com/images/laVuelta/${params.url}/${noticia.nameImage}.jpg`} />

          {/*Twitter Cards */}
          <meta name="twitter:title" content={`${noticia.title} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`} />
          <meta name="twitter:url" content={`https://www.oypsanlorencista.com/#/la-vuelta/${noticia.url}`} />
          <meta name="twitter:description" content={noticia.parrafoUno} />
          <meta name="twitter:image" content={`https://oypsanlorencista.com/images/laVuelta/${params.url}/${noticia.nameImage}.jpg`} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{noticia.title} - Orden y Progreso Sanlorencista</title>
          {/*Fin meta tags */}
          </Helmet>

          <div className={styles.notaContainer}>
            <img
              src={`/images/laVuelta/${params.url}/${noticia.nameImage}.jpg`}
              alt={noticia.title}
              className={styles.mainImageNew}
            />

            <span className={styles.newsSign}>
              Escrito por <strong>{noticia.writer}</strong>
            </span>
            <div className={styles.newsMainContainer}>
              <div className={styles.parrafos}>{noticia.parrafoUno}</div>
              <div className={styles.parrafos}>{noticia.parrafoDos}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenDos}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />
              <div className={styles.parrafos}>{noticia.parrafoTres}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenTresBis}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />
              <div className={styles.parrafos}>{noticia.parrafoCuatro}</div>
              <div className={styles.parrafos}>{noticia.parrafoCinco}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenTres}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />
              <div className={styles.parrafos}>{noticia.parrafoSeis}</div>
              <div className={styles.parrafos}>{noticia.parrafoSiete}</div>
              <div className={styles.parrafos}>{noticia.parrafoOcho}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenCuatro}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />
              <div className={styles.parrafos}>{noticia.parrafoNueve}</div>
              <div className={styles.parrafos}>{noticia.parrafoDiez}</div>
              <div className={styles.parrafos}>{noticia.parrafoOnce}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenCinco}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />

              <div className={styles.parrafos}>{noticia.parrafoDoce}</div>
              <div className={styles.parrafos}>{noticia.parrafoTrece}</div>
              <div className={styles.parrafos}>{noticia.parrafoCatorce}</div>
              <div className={styles.parrafos}>{noticia.parrafoQuince}</div>
              <div className={styles.parrafos}>{noticia.parrafoDieciseis}</div>
              <div className={styles.parrafos}>{noticia.parrafoDiecisiete}</div>
              <img
                src={`/images/laVuelta/${params.url}/${noticia.imagenSiete}.jpg`}
                alt=""
                className={styles.secondaryImage}
              />
              <div className={styles.parrafos}>{noticia.parrafoDieciocho}</div>

              <div className={styles.parrafos}>{noticia.parrafoDiecinueve}</div>
              <div className={styles.parrafos}>{noticia.parrafoVeinte}</div>
            </div>

            <div className={styles.socialMediaContainer}>
              <span className={styles.shareText}>| Compartí</span>
              <div className={styles.socialMediaIconsContainer}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://oypsanlorencista.com/%23/la-vuelta/${noticia.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img
                    src={facebookShare}
                    alt="icono compartir facebook"
                    className={styles.shareIconsNews}
                  />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=https%3A//oypsanlorencista.com/%23/la-vuelta/${noticia.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img
                    src={twitterShare}
                    alt="icono compartir twitter"
                    className={styles.shareIconsNews}
                  />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=https://oypsanlorencista.com/%23/la-vuelta/${noticia.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img
                    src={whatsappShare}
                    alt="icono compartir whatsapp"
                    className={styles.shareIconsNews}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Header />
      <div className={styles.newsContainer}>
        <h1 className={styles.newsTitle}>{noticia.title}</h1>
        <div className={styles.dateNewsContainer}>
          <p className={styles.newsDate}>{noticia.date}</p>
        </div>

        <div className={styles.bodyNewsContainer}>{loadingImage()}</div>
      </div>
    </>
  );
};
