import React from "react";
import { useNavigate } from "react-router-dom";

import { propuestas } from "../../Propuestas/data/propuestas";

import styles from "../styles/home.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomeProposals = () => {
  const navigate = useNavigate();

  const handleButtonGoToProposals = () => {
    navigate(`/propuestas`);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.proposalsContainer}>
      <div className={styles.proposalTitleContainer}>
        <h3 className={styles.proposalSectionTitle}>Nuestras propuestas</h3>
        <button
          onClick={handleButtonGoToProposals}
          className={styles.seeMoreButton}
        >
          Ver mas
        </button>
      </div>

      <Carousel
        className={styles.proposalsBoxContainer}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        autoPlaySpeed={500}
        keyBoardControl={true}
        slidesToSlide={4}
        transitionDuration={600}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}

        //itemClass="carousel-item-padding-right-560px"
      >
        {propuestas.slice(0, 4).map((propuesta) => {
          const handleButtonGoToProposal = () => {
            navigate(`/propuestas/${propuesta.url}`);
          };

          return (
            <>
              <article key={propuesta.id} className={styles.proposalBox}>
                <h4 className={styles.proposalTitle}>{propuesta.title}</h4>
                <p className={styles.proposalsContent}>{propuesta.content}</p>
                <button
                  onClick={handleButtonGoToProposal}
                  className={styles.proposalLinkButton}
                >
                  Lee el despacho entero acá ➜
                </button>
              </article>
            </>
          );
        })}
      </Carousel>

      <div className={styles.tabletContainer}>
        {/*Modo Tablet */}
        {propuestas.slice(0, 4).map((propuesta) => {
          const handleButtonGoToProposal = () => {
            navigate(`/propuestas/${propuesta.url}`);
          };
          return (
            <article key={propuesta.id} className={styles.tabletProposalBox}>
              <h4 className={styles.proposalTitle}>{propuesta.title}</h4>
              <p className={styles.proposalsContent}>{propuesta.content}</p>
              <button
                onClick={handleButtonGoToProposal}
                className={styles.proposalLinkButton}
              >
                Lee el despacho entero acá ➜
              </button>
            </article>
          );
        })}
      </div>
      
      <div className={styles.mobileContainer}>
        {/*Modo Mobile */}
        {propuestas.slice(0, 4).map((propuesta) => {
          const handleButtonGoToProposal = () => {
            navigate(`/propuestas/${propuesta.url}`);
          };
          return (
            <article key={propuesta.id} className={styles.mobileProposalBox}>
              <h4 className={styles.proposalTitle}>{propuesta.title}</h4>
              <p className={styles.proposalsContent}>{propuesta.content}</p>
              <button
                onClick={handleButtonGoToProposal}
                className={styles.proposalLinkButton}
              >
                Lee el despacho entero acá ➜
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};
