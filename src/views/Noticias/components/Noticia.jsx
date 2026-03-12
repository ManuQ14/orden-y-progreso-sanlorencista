import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { getNotaByUrl } from "../../../services/cmsApi";
import { notas as notasEstaticas } from "../data/notas";
import styles from "../styles/noticias.module.scss";

import facebookShare from "../../../assets/icons/shareIcons/facebookShare.svg";
import twitterShare from "../../../assets/icons/shareIcons/twitterShare.svg";
import whatsappShare from "../../../assets/icons/shareIcons/whatsappShare.svg";

import { Header } from "./Header";

const SITE_URL = "https://oypsanlorencista.com";

// Si la imagen es una URL absoluta (subida al CMS) la usamos directamente;
// si no, construimos la ruta legacy del sitio estático.
const resolveImg = (value, url, fallbackPath) =>
  value?.startsWith("http") ? value : `${fallbackPath}/${url}/${value}.jpg`;

export const Noticia = () => {
  const { url } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [esCmsNota, setEsCmsNota] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError("");

    const cargar = async () => {
      try {
        // Intentar cargar desde la API del CMS
        const data = await getNotaByUrl(url);
        setNoticia({
          ...data,
          nameImage: data.name_image || data.nameImage || "",
          miniatureImage: data.miniature_image || data.miniatureImage || "",
        });
        setEsCmsNota(true);
      } catch {
        // Fallback: buscar en el array estático (notas legacy)
        const legacy = notasEstaticas.find((n) => n.url === url);
        if (legacy) {
          setNoticia(legacy);
          setEsCmsNota(false);
        } else {
          setError("No se encontró la noticia.");
        }
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, [url]);

  if (loading) {
    return (
      <>
        <Header />
        <div className={styles.newsContainer}>
          <div className={styles.ldsRing}>
            <div></div><div></div><div></div><div></div>
          </div>
        </div>
      </>
    );
  }

  if (error || !noticia) {
    return (
      <>
        <Header />
        <div
          style={{
            minHeight: "65vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "56px", marginBottom: "16px" }}>📰</span>
          <h1
            style={{
              fontFamily: "GothamBold, sans-serif",
              fontSize: "26px",
              color: "#12233c",
              marginBottom: "12px",
            }}
          >
            Esta nota no está disponible
          </h1>
          <p
            style={{
              fontFamily: "GothamBook, sans-serif",
              fontSize: "15px",
              color: "#6b7280",
              maxWidth: "420px",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Es posible que la nota haya sido eliminada, movida o que la URL
            sea incorrecta.
          </p>
          <a
            href="/noticias"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              backgroundColor: "#c20c0d",
              color: "white",
              borderRadius: "25px",
              fontFamily: "GothamBook, sans-serif",
              fontSize: "14px",
              textDecoration: "none",
              textAlign: "center",
              transition: "background 200ms",
            }}
          >
            Ver todas las noticias
          </a>
        </div>
      </>
    );
  }

  const imagenPrincipalUrl = `${SITE_URL}/images/notas/${url}/${noticia.nameImage}.jpg`;
  const descripcionSeo = noticia.content || noticia.parrafoUno || "";
  const tituloSeo = `${noticia.title} - Orden y Progreso Sanlorencista`;
  const urlCanonica = `${SITE_URL}/noticias/${url}`;

  return (
    <>
      <Helmet>
        <title>{tituloSeo}</title>
        <meta name="description" content={descripcionSeo} />
        <link rel="canonical" href={urlCanonica} />

        {/* Open Graph */}
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={tituloSeo} />
        <meta property="og:description" content={descripcionSeo} />
        <meta property="og:url" content={urlCanonica} />
        <meta property="og:site_name" content="Orden y Progreso Sanlorencista" />
        <meta property="og:image" content={imagenPrincipalUrl} />
        <meta property="og:image:url" content={imagenPrincipalUrl} />
        <meta property="og:image:secure_url" content={imagenPrincipalUrl} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tituloSeo} />
        <meta name="twitter:description" content={descripcionSeo} />
        <meta name="twitter:url" content={urlCanonica} />
        <meta name="twitter:image" content={imagenPrincipalUrl} />
      </Helmet>

      <Header />

      <div className={styles.newsContainer}>
        <h1 className={styles.newsTitle}>{noticia.title}</h1>

        <div className={styles.dateNewsContainer}>
          <p className={styles.newsDate}>
            {noticia.date
              ? new Date(noticia.date).toLocaleDateString("es-AR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                timeZone: "America/Argentina/Buenos_Aires",
              })
              : ""}
          </p>
        </div>

        <div className={styles.bodyNewsContainer}>
          <div className={styles.notaContainer}>
            {/* Imagen principal */}
            {noticia.nameImage && (
              <img
                src={resolveImg(noticia.nameImage, url, "/images/notas")}
                alt={noticia.title}
                className={styles.mainImageNew}
              />
            )}

            {/* Autor */}
            {noticia.writer && (
              <span className={styles.newsSign}>
                Escrito por <strong>{noticia.writer}</strong>
              </span>
            )}

            {/* Cuerpo: HTML del editor (notas nuevas del CMS) */}
            {esCmsNota && noticia.body && (
              <div
                className={styles.newsMainContainer}
                dangerouslySetInnerHTML={{ __html: noticia.body }}
              />
            )}

            {/* Cuerpo: estructura legacy de párrafos (notas del archivo estático) */}
            {!esCmsNota && (
              <div className={styles.newsMainContainer}>
                {[
                  "parrafoUno", "parrafoDos", "parrafoTres", "parrafoCuatro",
                  "parrafoCinco", "parrafoSeis", "parrafoSiete", "parrafoOcho",
                  "parrafoNueve", "parrafoDiez", "parrafoOnce", "parrafoDoce",
                  "parrafoTrece", "parrafoCatorce", "parrafoQuince",
                  "parrafoDieciseis", "parrafoDiecisiete", "parrafoDieciocho",
                  "parrafoDiecinueve", "parrafoVeinte",
                  "parrafoVeintiuno", "parrafoVeintidos", "parrafoVeintitres",
                  "parrafoVeinticuatro", "parrafoVeinticinco", "parrafoVeintiseis",
                ].map((key) =>
                  noticia[key] ? (
                    <div key={key} className={styles.parrafos}>{noticia[key]}</div>
                  ) : null
                )}

                {/* Imágenes intermedias del formato legacy */}
                {["imagenDos", "imagenTres", "imagenCuatro", "imagenCinco",
                  "imagenSeis", "imagenSiete", "imagenOcho",
                  "imagenAlternativa1", "imagenAlternativa2",
                  "imagenAlternativa3", "imagenAlternativa4", "imagenAlternativa5",
                  "imagenExtra", "subImagenUno",
                ].map((key) =>
                  noticia[key] ? (
                    <img
                      key={key}
                      src={`/images/notas/${url}/${noticia[key]}.jpg`}
                      alt=""
                      className={styles.secondaryImage}
                    />
                  ) : null
                )}

                {/* Subtítulos con contenido del formato legacy */}
                {Array.from({ length: 15 }, (_, i) => {
                  const n = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete",
                    "Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince"][i];
                  return noticia[`subtitle${n}`] ? (
                    <div key={`sub${n}`}>
                      <h4 className={styles.h4Subtitle}>{noticia[`subtitle${n}`]}</h4>
                      {noticia[`content${n}`] && (
                        <p className={styles.contentSubtitle}>{noticia[`content${n}`]}</p>
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            )}

            {/* Compartir en redes */}
            <div className={styles.socialMediaContainer}>
              <span className={styles.shareText}>| Compartí</span>
              <div className={styles.socialMediaIconsContainer}>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlCanonica)}`}
                  target="_blank" rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img src={facebookShare} alt="Compartir en Facebook" className={styles.shareIconsNews} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(urlCanonica)}`}
                  target="_blank" rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img src={twitterShare} alt="Compartir en Twitter" className={styles.shareIconsNews} />
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(urlCanonica)}`}
                  target="_blank" rel="noreferrer"
                  className={styles.iconsMedia}
                >
                  <img src={whatsappShare} alt="Compartir en WhatsApp" className={styles.shareIconsNews} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
