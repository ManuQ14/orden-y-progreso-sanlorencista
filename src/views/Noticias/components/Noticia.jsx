import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import { notas } from "../data/notas";

import styles from "../styles/noticias.module.scss";

/*imports de iconos de los botones de compartir noticia */
import facebookShare from "../../../assets/icons/shareIcons/facebookShare.svg";
import twitterShare from "../../../assets/icons/shareIcons/twitterShare.svg";
import whatsappShare from "../../../assets/icons/shareIcons/whatsappShare.svg";

import { Header } from "./Header";

export const Noticia = () => {
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
      return <div>Hubo algún error al cargar la noticia: {error}</div>;
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
            {/*OG Meta Tags */}
            <meta
              name="description"
              content={`${noticia.parrafoUno} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`}
            />
            <link
              rel="canonical"
              href={`https://www.oypsanlorencista.com/%23/noticias/${noticia.url}`}
            />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={`${noticia.title} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`}
            />
            <meta property="og:description" content={noticia.parrafoUno} />
            <meta
              property="og:url"
              content={`https://www.oypsanlorencista.com/#/noticias/${noticia.url}`}
            />
            <meta
              property="og:site_name"
              content="Orden y Progreso Sanlorencista"
            />
            <meta
              property="og:image"
              content={`https://oypsanlorencista.com/images/notas/${params.url}/${noticia.nameImage}.jpg`}
            />
            <meta
              property="og:image:url"
              content={`https://oypsanlorencista.com/images/notas/${params.url}/${noticia.nameImage}.jpg`}
            />
            <meta
              property="og:image:secure_url"
              content={`https://oypsanlorencista.com/images/notas/${params.url}/${noticia.nameImage}.jpg`}
            />

            {/*Twitter Cards */}
            <meta
              name="twitter:title"
              content={`${noticia.title} - Sitio Web Oficial de la Agrupación Orden y Progreso Sanlorencista`}
            />
            <meta
              name="twitter:url"
              content={`https://www.oypsanlorencista.com/#/noticias/${noticia.url}`}
            />
            <meta name="twitter:description" content={noticia.parrafoUno} />
            <meta
              name="twitter:image"
              content={`https://oypsanlorencista.com/images/notas/${params.url}/${noticia.nameImage}.jpg`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <title>{noticia.title} - Orden y Progreso Sanlorencista</title>
            {/*Fin meta tags */}
          </Helmet>

          {/**Inicio cuerpo noticia */}
          <div className={styles.notaContainer}>
            <img
              src={`/images/notas/${params.url}/${noticia.nameImage}.jpg`}
              alt={noticia.title}
              className={styles.mainImageNew}
            />

            {noticia.writer ? (
              <span className={styles.newsSign}>
                Escrito por <strong>{noticia.writer}</strong>
              </span>
            ) : (
              ""
            )}

            <div className={styles.newsMainContainer}>
              <div className={styles.parrafos}>{noticia.parrafoUno}</div>
              <div className={styles.parrafos}>{noticia.parrafoDos}</div>

              {noticia.imagenDos ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenDos}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.videoUno ? (
                <video
                  src={noticia.videoUno}
                  className={styles.secondaryImage}
                  controls
                ></video>
              ) : (
                ""
              )}

              {noticia.parrafoTres ? (
                <div className={styles.parrafos}>{noticia.parrafoTres}</div>
              ) : (
                ""
              )}

              {noticia.parrafoCuatro ? (
                <div className={styles.parrafos}>{noticia.parrafoCuatro}</div>
              ) : (
                ""
              )}

              {noticia.parrafoCinco ? (
                <div className={styles.parrafos}>{noticia.parrafoCinco}</div>
              ) : (
                ""
              )}

              {/**Imagen alternativa */}
              {noticia.imagenAlternativa1 ? (
                <>
                  <img
                    src={`/images/notas/${params.url}/${noticia.imagenAlternativa1}.jpg`}
                    alt=""
                    className={styles.secondaryImage}
                  />
                </>
              ) : (
                ""
              )}

              {noticia.imagenTres ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenTres}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.parrafoSeis ? (
                <div className={styles.parrafos}>{noticia.parrafoSeis}</div>
              ) : (
                ""
              )}

              {noticia.parrafoSiete ? (
                <div className={styles.parrafos}>{noticia.parrafoSiete}</div>
              ) : (
                ""
              )}

              {noticia.parrafoOcho ? (
                <div className={styles.parrafos}>{noticia.parrafoOcho}</div>
              ) : (
                ""
              )}

              {noticia.imagenAlternativa2 ? (
                <>
                  <img
                    src={`/images/notas/${params.url}/${noticia.imagenAlternativa2}.jpg`}
                    alt=""
                    className={styles.secondaryImage}
                  />
                </>
              ) : (
                ""
              )}

              {noticia.imagenCuatro ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenCuatro}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.parrafoNueve ? (
                <div className={styles.parrafos}>{noticia.parrafoNueve}</div>
              ) : (
                ""
              )}

              {noticia.parrafoDiez ? (
                <div className={styles.parrafos}>{noticia.parrafoDiez}</div>
              ) : (
                ""
              )}

              {noticia.parrafoOnce ? (
                <div className={styles.parrafos}>{noticia.parrafoOnce}</div>
              ) : (
                ""
              )}

              {noticia.imagenAlternativa3 ? (
                <>
                  <img
                    src={`/images/notas/${params.url}/${noticia.imagenAlternativa3}.jpg`}
                    alt=""
                    className={styles.secondaryImage}
                  />
                </>
              ) : (
                ""
              )}

              {noticia.parrafoDoce ? (
                <div className={styles.parrafos}>{noticia.parrafoDoce}</div>
              ) : (
                ""
              )}

              {noticia.imagenCinco ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenCinco}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.parrafoTrece ? (
                <div className={styles.parrafos}>{noticia.parrafoTrece}</div>
              ) : (
                ""
              )}

              {noticia.parrafoCatorce ? (
                <div className={styles.parrafos}>{noticia.parrafoCatorce}</div>
              ) : (
                ""
              )}

              {noticia.imagenAlternativa4 ? (
                <>
                  <img
                    src={`/images/notas/${params.url}/${noticia.imagenAlternativa4}.jpg`}
                    alt=""
                    className={styles.secondaryImage}
                  />
                </>
              ) : (
                ""
              )}

              {noticia.imagenSeis ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenSeis}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.parrafoQuince ? (
                <div className={styles.parrafos}>{noticia.parrafoQuince}</div>
              ) : (
                ""
              )}

              {noticia.parrafoDieciseis ? (
                <div className={styles.parrafos}>
                  {noticia.parrafoDieciseis}
                </div>
              ) : (
                ""
              )}

              {noticia.parrafoDiecisiete ? (
                <div className={styles.parrafos}>
                  {noticia.parrafoDiecisiete}
                </div>
              ) : (
                ""
              )}

              {noticia.imagenSiete ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenSiete}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.imagenAlternativa5 ? (
                <>
                  <img
                    src={`/images/notas/${params.url}/${noticia.imagenAlternativa5}.jpg`}
                    alt=""
                    className={styles.secondaryImage}
                  />
                </>
              ) : (
                ""
              )}

              {noticia.parrafoDieciocho ? (
                <div className={styles.parrafos}>
                  {noticia.parrafoDieciocho}
                </div>
              ) : (
                ""
              )}

              {noticia.parrafoDiecinueve ? (
                <div className={styles.parrafos}>
                  {noticia.parrafoDiecinueve}
                </div>
              ) : (
                ""
              )}

              {noticia.imagenOcho ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenOcho}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.parrafoVeinte ? (
                <div className={styles.parrafos}>{noticia.parrafoVeinte}</div>
              ) : (
                ""
              )}

              {noticia.parrafoVeintiuno ||
              noticia.parrafoVeintidos ||
              noticia.parrafoVeintitres ||
              noticia.link ? (
                <>
                  <div className={styles.parrafos}>
                    {noticia.parrafoVeintiuno}
                  </div>
                  {noticia.imagenSiete ? (
                    <img
                      src={`/images/notas/${params.url}/${noticia.imagenSiete}.jpg`}
                      alt=""
                      className={styles.secondaryImage}
                    />
                  ) : (
                    ""
                  )}
                  <div className={styles.parrafos}>
                    {noticia.parrafoVeintidos}
                  </div>
                  <div className={styles.parrafos}>
                    {noticia.parrafoVeintitres}
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.externalLinks}
                  >
                    Plan de Gobierno
                  </a>
                </>
              ) : (
                ""
              )}

              {/**Sección especial de noticias con subtitulos */}
              {noticia.subtitleUno ||
              noticia.contentUno ||
              noticia.subtitleDos ||
              noticia.contentDos ||
              noticia.subtitleTres ||
              noticia.contentTres ||
              noticia.subtitleCuatro ||
              noticia.contentCuatro ||
              noticia.subtitleCinco ||
              noticia.contentCinco ||
              noticia.subtitleSeis ||
              noticia.contentSeis ||
              noticia.subtitleSiete ||
              noticia.contentSiete ||
              noticia.subtitleOcho ||
              noticia.contentOcho ||
              noticia.subtitleNueve ||
              noticia.contentNueve ||
              noticia.contentDiez ? (
                <>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleUno}</h4>
                  <p className={styles.contentSubtitle}>{noticia.contentUno}</p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleDos}</h4>
                  <p className={styles.contentSubtitle}>{noticia.contentDos}</p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleTres}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentTres}
                  </p>
                  <h4 className={styles.h4Subtitle}>
                    {noticia.subtitleCuatro}
                  </h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentCuatro}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleCinco}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentCinco}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleSeis}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentSeis}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleSiete}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentSiete}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleOcho}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentOcho}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleNueve}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentNueve}
                  </p>
                  <h4 className={styles.h4Subtitle}>{noticia.subtitleDiez}</h4>
                  <p className={styles.contentSubtitle}>
                    {noticia.contentDiez}
                  </p>
                </>
              ) : (
                ""
              )}

              {noticia.imagenExtra ? (
                <img
                  src={`/images/notas/${params.url}/${noticia.imagenExtra}.jpg`}
                  alt=""
                  className={styles.secondaryImage}
                />
              ) : (
                ""
              )}

              {noticia.textoLink ? (
                <>
                  <div className={styles.parrafos}>{noticia.textoLink}</div>
                  <a
                    href="https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.externalLinks}
                  >
                    Plan de Gobierno
                  </a>
                </>
              ) : (
                ""
              )}
            </div>

            <div className={styles.socialMediaContainer}>
              <span className={styles.shareText}>| Compartí</span>
              <div className={styles.socialMediaIconsContainer}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://oypsanlorencista.com/%23/noticias/${noticia.url}`}
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
                  href={`https://twitter.com/intent/tweet?text=https%3A//oypsanlorencista.com/%23/noticias/${noticia.url}`}
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
                  href={`https://api.whatsapp.com/send?text=https://oypsanlorencista.com/%23/noticias/${noticia.url}`}
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
