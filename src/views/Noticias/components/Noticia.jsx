import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../../components/PageHeader/PageHeader";
import { getNotaByUrl } from "../../../services/cmsApi";
import { notas as notasEstaticas } from "../data/notas";
import styles from "../styles/noticias.module.scss";
import { RedesSociales } from "./RedesSociales";

export const Noticia = () => {
  const { url } = useParams();
  const [nota, setNota] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarNota = async () => {
      try {
        const data = await getNotaByUrl(url);
        setNota(data);
      } catch {
        const estatica = notasEstaticas.find((n) => n.url === url);
        setNota(estatica);
      } finally {
        setLoading(false);
      }
    };
    cargarNota();
    window.scrollTo(0, 0);
  }, [url]);

  if (loading) return null;
  if (!nota) return <div>Nota no encontrada</div>;

  return (
    <>
      <Helmet>
        <title>{nota.title} - Orden y Progreso Sanlorencista</title>
      </Helmet>
      <PageHeader showHero={false} />
      <div className={styles.noticiaContainer}>
        <h2 className={styles.noticiaTitulo}>{nota.title}</h2>
        <div className={styles.noticiaContent}>
          {nota.content?.split("\n").map((p, i) => (
            <p key={i} className={styles.parrafo}>{p}</p>
          ))}
        </div>
        <RedesSociales title={nota.title} />
      </div>
    </>
  );
};
