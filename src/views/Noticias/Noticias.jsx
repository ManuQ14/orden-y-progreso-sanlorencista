import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header";
import { MiniaturaNoticias } from "./components/MiniaturaNoticias";
import escudoOyP from "../../assets/EscudoOyP.svg";
import styles from "./styles/noticias.module.scss";

export const Noticias = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getNews = () => {
    setTimeout(() => {
      try {
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }, 750);
  };

  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, []);

  if (error !== "") {
    return <div>Hubo algún error: {error}</div>;
  } else if (loading === true) {
    return (
      <div className={styles.layout}>
        <img src={escudoOyP} alt="Escudo OyP" className={styles.escudoCarga} />
      </div>
    );
  } else if (loading === false && error === "") {
    return (
      <>
        <Helmet>
        {/*OG Meta Tags */  }
          <meta name="description" content="Noticias - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <link rel="canonical" href="https://www.oypsanlorencista.com/#/noticias" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Noticias de Orden y Progreso Sanlorencista" />
          <meta property="og:description" content="Noticias de la Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:url" content="https://www.oypsanlorencista.com/#/noticias" />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:secure_url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />

          {/*Twitter Cards */}
          <meta name="twitter:title" content="Noticias - Orden y Progreso Sanlorencista" />
          <meta name="twitter:url" content="https://www.oypsanlorencista.com/#/noticias" />
          <meta name="twitter:description" content="Noticias de la Agrupación Orden y Progreso Sanlorencista" />
          <meta name="twitter:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>Noticias - Orden y Progreso Sanlorencista</title>
          {/*Fin meta tags */}
        </Helmet>
        <Header />
        <div className={styles.noticiasContainer}>
          <h2 className={styles.subtitle}>Noticias</h2>
          <MiniaturaNoticias />
        </div>
      </>
    );
  }
};
