import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PageHeader } from "../../../components/PageHeader/PageHeader";
import { propuestas } from "../data/propuestas";
import styles from "../styles/propuestas.module.scss";

export const Propuesta = () => {
  const { url } = useParams();
  const propuesta = propuestas.find((p) => p.url === url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!propuesta) return <div>Propuesta no encontrada</div>;

  return (
    <>
      <Helmet>
        <title>{propuesta.title} - Propuestas OyP</title>
      </Helmet>
      <PageHeader showHero={false} />
      <div className={styles.despachoContainer}>
        <h2 className={styles.despachoTitulo}>{propuesta.title}</h2>
        <div className={styles.despachoContent}>
          {propuesta.content}
        </div>
      </div>
    </>
  );
};
