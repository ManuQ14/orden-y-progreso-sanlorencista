/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import styles from "../styles/laVuelta.module.scss";
import previousButton from "../../../assets/previousButton.svg";
import nextButton from "../../../assets/nextButton.svg";

import { notas } from "../data/notas";

export const MiniaturaNoticiaVuelta = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [anyNews, setAnyNews] = useState(notas);

  const newsPerPage = 9;
  const numberOfPagesVisited = page * newsPerPage;

  const displayNews = anyNews
    .slice(numberOfPagesVisited, numberOfPagesVisited + newsPerPage)
    .map((anyNew) => {
      const handleButtonGoToNews = () => {
        navigate(`/la-vuelta/${anyNew.url}`);
      };

      return (
        <article
          key={anyNew.id}
          className={styles.miniaturaNota}
          onClick={handleButtonGoToNews}
        >
          <img
            src={`/images/miniaturasVuelta/${anyNew.miniatureImage}.jpg`}
            alt=""
            id={styles.imageMiniatura}
          />
          <div className={styles.coverDifuminated}>
            <h3 className={styles.miniaturaTitle}>{anyNew.title}</h3>
          </div>
        </article>
      );
    });

  const totalPages = Math.ceil(anyNews.length / newsPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <>
      <div className={styles.contenedorMiniaturas}>{displayNews}</div>
      <ReactPaginate
        previousLabel={<img src={previousButton} />}
        nextLabel={<img src={nextButton} />}
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
