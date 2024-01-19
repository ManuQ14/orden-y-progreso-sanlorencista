import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "../styles/contacto.module.scss";
import EscudoOyP from "../../../assets/EscudoOyP.svg";
import cerrarMenuHamburguesaBlanco from "../../../assets/icons/mobile/cerrarMenuBlanco.svg";
import menuHamburguesaNegro from "../../../assets/icons/mobile/menuHamburguesaNegro.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const handleButtonGoToHome = () => {
    navigate("/inicio");
  };

  const handleButtonOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleButtonCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.ul}>
          <NavLink
            to="/inicio"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/noticias"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Noticias
          </NavLink>

          <img src={EscudoOyP} alt="Escudo OyP" id="EscudoOyP" />

          {/* <NavLink
            to="/la-vuelta"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            La Vuelta
          </NavLink> */}
          <NavLink
            to="/plan-de-gobierno"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Plan de Gobierno
          </NavLink>
          <NavLink
            to="/propuestas"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Propuestas
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contacto
          </NavLink>
        </ul>
      </nav>

      {/*Header mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverDifuminadoMobile}>
          <img
            src={EscudoOyP}
            alt="Escudo OyP mobile"
            className={styles.escudoOyPMobile}
            onClick={handleButtonGoToHome}
          />

          <button className="menuHamburguesa" onClick={handleButtonOpenMenu}>
            <img
              src={menuHamburguesaNegro}
              alt="Menú hamburguesa"
              className={openMenu === true ? "hiddenMenu" : "burguerMenuButton"}
            />
          </button>

          <nav className={openMenu === true ? "navMobile" : "navMobileClosed"}>
            <div className={styles.topMenuContainer}>
              <img
                src={EscudoOyP}
                alt="Escudo OyP mobile"
                className={styles.escudoOyPMobile}
              />
              <button
                className="cerrarMenuHamburguesa"
                onClick={handleButtonCloseMenu}
              >
                <img
                  src={cerrarMenuHamburguesaBlanco}
                  alt="Cerrar menú"
                  className={
                    openMenu === true
                      ? "cerrarMenuHamburguesa"
                      : "hiddenCloseButton"
                  }
                />
              </button>
            </div>

            <ul className={styles.menuMobile}>
              <NavLink to="/inicio" className={styles.menuListMobile}>
                Inicio
              </NavLink>
              <NavLink to="/nosotros" className={styles.menuListMobile}>
                Nosotros
              </NavLink>
              <NavLink to="/noticias" className={styles.menuListMobile}>
                Noticias
              </NavLink>
              {/*  <NavLink to="/la-vuelta" className={styles.menuListMobile}>
              La Vuelta
            </NavLink> */}
            <NavLink to="/plan-de-gobierno" className={styles.menuListMobile}>
              Plan de Gobierno
            </NavLink>
              <NavLink to="/propuestas" className={styles.menuListMobile}>
                Propuestas
              </NavLink>
              <NavLink to="/contacto" className={styles.menuListMobile}>
                Contacto
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
