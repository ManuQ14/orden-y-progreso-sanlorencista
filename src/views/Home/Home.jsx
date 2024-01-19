//import React from "react";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";
import escudoOyP from "../../assets/EscudoOyP.svg";
import styles from "./styles/home.module.scss";

import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";

//import escudoImage from "../../assets/images/IMAGENNOTICIAS.jpg";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getHome = () => {
    setTimeout(() => {
      try {
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }, 750);
  };

  useEffect(() => {
    getHome();
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
          <meta name="description" content="Inicio - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <link rel="canonical" href="https://www.oypsanlorencista.com/#/inicio" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Inicio - Orden y Progreso Sanlorencista" />
          <meta property="og:description" content="Inicio - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:url" content="https://www.oypsanlorencista.com/#/inicio" />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:secure_url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta name="keywords" content="Orden, Progreso, Sanlorencista, San Lorenzo, San, Lorenzo, Política, Ciclón, Cuervo, Vuelta a Boedo, Boedo, Marcelo Culotta, Culotta, Presidente, Tamer, Culotta Presidente, 17 de diciembre, Elecciones San Lorenzo" />
    

          {/*Twitter Cards */}
          <meta name="twitter:title" content="Inicio - Orden y Progreso Sanlorencista" />
          <meta name="twitter:url" content="https://www.oypsanlorencista.com/#/inicio" />
          <meta name="twitter:description" content="Inicio - Sitio Web Oficial de la agrupación Orden y Progreso Sanlorencista" />
          <meta name="twitter:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>Inicio - Orden y Progreso Sanlorencista</title>
          {/*Fin meta tags */}

        </Helmet>
        <Header />
        <MainSection />
      </>
    );
  }
};
