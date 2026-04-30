import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { MainSection } from "./components/MainSection";

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        {/*OG Meta Tags */  }
          <meta name="description" content="Contacto - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista" />
          <link rel="canonical" href="https://www.oypsanlorencista.com/#/contacto" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contacto de Orden y Progreso Sanlorencista" />
          <meta property="og:description" content="Contacto de la Agrupación Orden y Progreso Sanlorencista" />
          <meta property="og:url" content="https://www.oypsanlorencista.com/#/contacto" />
          <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
          <meta property="og:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta property="og:image:secure_url" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />

          {/*Twitter Cards */}
          <meta name="twitter:title" content="Contacto - Orden y Progreso Sanlorencista" />
          <meta name="twitter:url" content="https://www.oypsanlorencista.com/#/contacto" />
          <meta name="twitter:description" content="Contacto de la Agrupación Orden y Progreso Sanlorencista" />
          <meta name="twitter:image" content="https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <title>Contacto - Orden y Progreso Sanlorencista</title>
          {/*Fin meta tags */}
      </Helmet>
      <PageHeader showHero={false} />
      <MainSection />
    </>
  );
};
