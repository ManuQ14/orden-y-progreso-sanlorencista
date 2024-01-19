import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EscudoOyP from "../../../assets/EscudoOyP.svg";
import cerrarMenuHamburguesaBlanco from "../../../assets/icons/mobile/cerrarMenuBlanco.svg";
/* import menuHamburguesaNegro from "../../../assets/icons/mobile/menuHamburguesaNegro.svg"; */
import menuHamburguesaBlanco from "../../../assets/icons/mobile/menuHamburguesaBlanco.svg";

import styles from "../styles/plataforma.module.scss";

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
          <NavLink to="/inicio" className={styles}>
            Inicio
          </NavLink>

          <NavLink to="/nosotros" className={styles}>
            Nosotros
          </NavLink>

          <NavLink to="/noticias" className={styles}>
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
          <NavLink to="/propuestas" className={styles}>
            Propuestas
          </NavLink>
          <NavLink to="/contacto" className={styles}>
            Contacto
          </NavLink>
        </ul>
      </nav>

      {/*Header mobile */}
      <div className={styles.headerMobile}>
        <img
          src={EscudoOyP}
          alt="Escudo OyP mobile"
          className={styles.escudoOyPMobile}
          onClick={handleButtonGoToHome}
        />

        <button className="menuHamburguesa" onClick={handleButtonOpenMenu}>
          <img
            src={menuHamburguesaBlanco}
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
    </>
  );
};
