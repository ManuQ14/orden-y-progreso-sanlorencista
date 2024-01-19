//import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import { Header } from "./components/Header";
import { MiniaturaNoticiaVuelta } from "./components/MiniaturaNoticiaVuelta";

import styles from "./styles/laVuelta.module.scss";

export const LaVuelta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
       {/*OG Meta Tags */  }
       <meta name="description" content="La Vuelta - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <link rel="canonical" href="https://www.oypsanlorencista.com/#/la-vuelta" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Noticias de La Vuelta - Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:description" content="Noticias de La Vuelta - Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:url" content="https://www.oypsanlorencista.com/#/la-vuelta" />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:secure_url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />

          {/*Twitter Cards */}
          <meta name="twitter:title" content="La Vuelta - Orden y Progreso Sanlorencista" />
          <meta name="twitter:url" content="https://www.oypsanlorencista.com/#/la-vuelta" />
          <meta name="twitter:description" content="Noticias de La Vuelta - Agrupación Orden y Progreso Sanlorencista" />
          <meta name="twitter:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>La Vuelta - Orden y Progreso Sanlorencista</title>
          {/*Fin meta tags */}
      </Helmet>

      <Header />
      <div className={styles.containerBody}>
        <h2 className={styles.subtitle}>Noticias de la Vuelta</h2>
        <MiniaturaNoticiaVuelta />
      </div>
    </>
  );
};
