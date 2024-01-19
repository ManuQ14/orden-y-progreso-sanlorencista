//import React from "react";
import { useEffect } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import  styles  from "./styles/plataforma.module.scss";

export const Plataforma = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.containerPlatform}>
      <Header />
      <Main />
    </div>
  );
};
