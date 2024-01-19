import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

import styles from "../styles/propuestas.module.scss";

import previousButton from "../../../assets/previousButton.svg";
import nextButton from "../../../assets/nextButton.svg";

import { propuestas } from "../data/propuestas";

export const MainSection = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [despachos, setDespachos] = useState(propuestas);
  const despachosPorPagina = 6;
  const numberOfPagesVisited = page * despachosPorPagina;

  const displayDespachos = despachos
    .slice(numberOfPagesVisited, numberOfPagesVisited + despachosPorPagina)
    .map((despacho) => {
      const handleButtonGoToDespacho = () => {
        navigate(`/propuestas/${despacho.url}`);
      };
      return (
        <article key={despacho.id} className={styles.despachoBox}>
          <h3 className={styles.despachoTitle}>| {despacho.mainTitle}</h3>
          <p className={styles.despachoContent}>{despacho.content}</p>
          <button
            onClick={handleButtonGoToDespacho}
            className={styles.buttonDespacho}
          >
            Lee el despacho completo acá ➜
          </button>
        </article>
      );
    });

  const totalPages = Math.ceil(despachos.length / despachosPorPagina);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <h3 className={styles.titleProposals}>Conocé nuestras propuestas</h3>
      <div className={styles.containerDespachos}>{displayDespachos}</div>
      <ReactPaginate
        previousLabel={<img src={previousButton} alt="Botón página anterior" />}
        nextLabel={<img src={nextButton} alt="Botón página siguiente" />}
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
