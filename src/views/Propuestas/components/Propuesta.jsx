import  { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { propuestas } from "../data/propuestas";

import { Header } from "./Header";
import styles from "../styles/propuestas.module.scss";

/*imports de iconos de los botones de compartir noticia */
import facebookShare from "../../../assets/icons/shareIcons/facebookShare.svg";
import twitterShare from "../../../assets/icons/shareIcons/twitterShare.svg";
import whatsappShare from "../../../assets/icons/shareIcons/whatsappShare.svg";

export const Propuesta = () => {
  const [despacho, setDespacho] = useState({});
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let despachos = propuestas.filter(
      (propuesta) => propuesta.url === params.url
    );
    setDespacho(despachos[0]);
  }, [params.url]);

  return (
    <>
      <Header />

      <div className={styles.despachoContainer}>
        <h2 className={styles.despachoTitulo}>{despacho.mainTitle}</h2>

        <span className={styles.despachoFecha}>{despacho.formalDate}</span>
        <div className={styles.despachoDestinatario}>
          <strong>{despacho.destinatario1}</strong>
          <strong>{despacho.destinatario2}</strong>
          <div>
            At.: <strong>{despacho.destinatario3}</strong>
          </div>
        </div>
        <div className={styles.introduccion}>{despacho.introduccion}</div>
        <div className={styles.parrafosContainer}>
          <div className={styles.parrafos}> {despacho.parrafoUno}</div>
          <div className={styles.parrafos}>
            <strong>{despacho.mainTitle}</strong>
          </div>
          <div className={styles.parrafos}>{despacho.parrafoDos}</div>
          <div className={styles.parrafos}>{despacho.parrafoTres}</div>
          <div className={styles.parrafos}>{despacho.parrafoCuatro}</div>
          <div className={styles.parrafos}>{despacho.parrafoCinco}</div>
          <div className={styles.parrafos}>{despacho.parrafoSeis}</div>
          <div className={styles.parrafos}>{despacho.parrafoSiete}</div>
          <div className={styles.parrafos}>{despacho.parrafoOcho}</div>
          <div className={styles.parrafos}>{despacho.parrafoNueve}</div>
          <div className={styles.parrafos}>{despacho.parrafoDiez}</div>
          <div className={styles.parrafos}>{despacho.parrafoOnce}</div>
          <div className={styles.parrafos}>{despacho.parrafoDoce}</div>
          <div className={styles.firmaContainer}>
            Sin otro particular, saludamos a Ud., atte.
            <div className={styles.firma}>
              <strong>{despacho.firma}</strong>
            </div>
          </div>
        </div>
        <div className={styles.sellosContainer}>
          <div className={styles.sello}>{despacho.sello1}</div>
          <div className={styles.sello}>{despacho.sello2}</div>
          <div className={styles.sello}>{despacho.sello3}</div>
          <div className={styles.sello}>{despacho.sello4}</div>
        </div>

        <div className={styles.socialMediaContainer}>
          <span className={styles.shareText}>| Compartí</span>
          <div className={styles.socialMediaIconsContainer}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://oypsanlorencista.com/%23/propuestass/${despacho.url}`}
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
              href={`https://twitter.com/intent/tweet?text=https%3A//oypsanlorencista.com/%23/propuestas/${despacho.url}`}
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
              href={`https://api.whatsapp.com/send?text=https://oypsanlorencista.com/%23/propuestas/${despacho.url}`}
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
};
