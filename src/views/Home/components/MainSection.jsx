import React from "react";
//import { useNavigate } from "react-router-dom";
import { MiniaturaHome } from "./MiniaturaHome";
import { Valores } from "../../Nosotros/components/Valores";
//import Styles from "../styles/home.module.scss";
import { HomeProposals } from "./HomeProposals";
import { NoticiaPrincipal } from "./NoticiaPrincipal";

export const MainSection = () => {
  



  return (
    <>
      <Valores />
      <NoticiaPrincipal />
      <HomeProposals />
      <MiniaturaHome/>

      
    </>
  );
};
