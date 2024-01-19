//import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "./components/Header";

import { MainSection } from "./components/MainSection";

export const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
      {/*OG Meta Tags */  }
      <meta name="description" content="Nosotros - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <link rel="canonical" href="https://www.oypsanlorencista.com/#/nosotros" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nosotros - Orden y Progreso Sanlorencista" />
          <meta property="og:description" content="Nosotros- Quienes somos- Nuestros valores - Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:url" content="https://www.oypsanlorencista.com/#/nosotros" />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content="https://oypsanlorencista.com/images/cards/equipo-oyp.jpg" />
          <meta property="og:image:url" content="https://oypsanlorencista.com/images/cards/equipo-oyp.jpg" />
          <meta property="og:image:secure_url" content="https://oypsanlorencista.com/images/cards/equipo-oyp.jpg" />

          {/*Twitter Cards */}
          <meta name="twitter:title" content="Nosotros - Orden y Progreso Sanlorencista" />
          <meta name="twitter:url" content="https://www.oypsanlorencista.com/#/nosotros" />
          <meta name="twitter:description" content="Nosotros - Sitio Web Oficial de la agrupación Orden y Progreso Sanlorencista" />
          <meta name="twitter:image" content="https://oypsanlorencista.com/images/cards/equipo-oyp.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>Nosotros - Orden y Progreso Sanlorencista</title>
  
          {/*Fin meta tags */}
      </Helmet>
      <Header />
      <MainSection />
    </>
  );
};
