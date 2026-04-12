import { useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import styles from "./styles/candidatos.module.scss";

export const Candidatos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.containerCandidatos}>
      <Header />
      <Main />
    </div>
  );
};
