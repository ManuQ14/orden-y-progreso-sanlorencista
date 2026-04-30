import { useEffect } from "react";
import { Main } from "./components/Main";
import styles from "./styles/candidatos.module.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const Candidatos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.containerCandidatos}>
      <PageHeader title="Nuestros Candidatos" heroClass={styles.headerHero} />
      <Main />
    </div>
  );
};
