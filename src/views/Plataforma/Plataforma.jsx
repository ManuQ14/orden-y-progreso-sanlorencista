import { useEffect } from "react";
import { Main } from "./components/Main";
import styles from "./styles/plataforma.module.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const Plataforma = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.containerPlatform}>
      <PageHeader showHero={false} />
      <Main />
    </div>
  );
};
