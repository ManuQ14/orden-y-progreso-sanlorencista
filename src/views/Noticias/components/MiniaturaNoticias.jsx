import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import styles from "../styles/noticias.module.scss";
import previousButton from "../../../assets/previousButton.svg";
import nextButton from "../../../assets/nextButton.svg";

import { getNotas } from "../../../services/cmsApi";
import { notas as notasEstaticas } from "../data/notas";

// Resuelve la src de imagen: URL absoluta (CMS) o ruta relativa (legacy)
const resolveMiniatura = (value) =>
  value?.startsWith("http") ? value : `/images/miniaturas/${value}.jpg`;

export const MiniaturaNoticias = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const newsPerPage = 9;

  useEffect(() => {
    const cargarNotas = async () => {
      try {
        const apiNotas = await getNotas();

        // Normalizar campos de la API (snake_case → camelCase)
        const normalizadas = apiNotas.map((n) => ({
          ...n,
          miniatureImage: n.miniature_image || n.miniatureImage || "",
          nameImage: n.name_image || n.nameImage || "",
        }));

        // Merge: notas de la API primero, luego las estáticas que la API aún no tiene
        const urlsApi = new Set(normalizadas.map((n) => n.url));
        const legacy = notasEstaticas.filter((n) => !urlsApi.has(n.url));

        // Las de la API van primero (más nuevas), luego el legado estático
        setNotas([...normalizadas, ...legacy]);
      } catch {
        // Si la API falla, usar datos estáticos como fallback
        setNotas(notasEstaticas);
      } finally {
        setLoading(false);
      }
    };

    cargarNotas();
  }, []);

  const numberOfPagesVisited = page * newsPerPage;

  const displayNews = notas
    .slice(numberOfPagesVisited, numberOfPagesVisited + newsPerPage)
    .map((nota) => (
      <article
        key={nota.id || nota.url}
        className={styles.miniaturaNota}
        onClick={() => navigate(`/noticias/${nota.url}`)}
      >
        <img
          src={resolveMiniatura(nota.miniatureImage)}
          alt={nota.title}
          id={styles.imageMiniatura}
        />
        <div className={styles.coverDifuminated}>
          <h3 className={styles.miniaturaTitle}>{nota.title}</h3>
        </div>
      </article>
    ));

  const totalPages = Math.ceil(notas.length / newsPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <div className={styles.ldsRing}>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.contenedorMiniaturas}>{displayNews}</div>
      <ReactPaginate
        previousLabel={<img src={previousButton} alt="Anterior" />}
        nextLabel={<img src={nextButton} alt="Siguiente" />}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={styles.containerPaginationBox}
        previousLinkClassName={styles.previousButton}
        nextLinkClassName={styles.nextButton}
        disabledClassName={styles.navigationDisabled}
        activeClassName={styles.navigationActive}
        breakClassName={styles.numeroSiguiente}
      />
    </>
  );
};
