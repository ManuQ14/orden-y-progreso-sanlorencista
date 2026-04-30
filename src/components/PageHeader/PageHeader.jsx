import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, NavLink } from "react-router-dom";
import EscudoOyP from "../../assets/EscudoOyP.svg";
import menuHamburguesaBlanco from "../../assets/icons/mobile/menuHamburguesaBlanco.svg";
import cerrarMenuHamburguesaBlanco from "../../assets/icons/mobile/cerrarMenuBlanco.svg";
import styles from "./PageHeader.module.scss";

export const PageHeader = ({ title, heroClass, showHero = true }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonGoToHome = () => {
    navigate("/inicio");
    setOpenMenu(false);
  };

  return (
    <>
      <header className={showHero ? heroClass : styles.simpleNav}>
        <div className={showHero ? styles.coverDifuminado : ""}>
          <nav className={styles.navBar}>
            <ul className={styles.ul}>
              <NavLink to="/inicio" className={({ isActive }) => (isActive ? styles.active : "")}>Inicio</NavLink>
              <NavLink to="/nosotros" className={({ isActive }) => (isActive ? styles.active : "")}>Nosotros</NavLink>
              <NavLink to="/noticias" className={({ isActive }) => (isActive ? styles.active : "")}>Noticias</NavLink>
              <img 
                src={EscudoOyP} 
                alt="Escudo OyP" 
                className={styles.escudooyp} 
                onClick={() => navigate("/inicio")}
              />
              <NavLink to="/plan-de-gobierno" className={({ isActive }) => (isActive ? styles.active : "")}>Plan de Gobierno</NavLink>
              <NavLink to="/propuestas" className={({ isActive }) => (isActive ? styles.active : "")}>Propuestas</NavLink>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? styles.active : "")}>Contacto</NavLink>
            </ul>
          </nav>
          {showHero && title && <h2 className={styles.mainh1}>{title}</h2>}
        </div>
      </header>

      {/* Mobile Header */}
      <div className={styles.headerMobile}>
        <div className={showHero ? styles.coverDifuminadoMobile : styles.simpleNavMobile}>
          <img src={EscudoOyP} alt="Escudo OyP mobile" className={styles.escudoOyPMobile} onClick={handleButtonGoToHome} />
          <button className={styles.menuHamburguesa} onClick={() => setOpenMenu(true)}>
            <img src={menuHamburguesaBlanco} alt="Menú" className={openMenu ? styles.hidden : ""} />
          </button>
          
          <nav className={openMenu ? styles.navMobile : styles.navMobileClosed}>
            <div className={styles.topMenuContainer}>
              <img src={EscudoOyP} alt="Escudo OyP" className={styles.escudoOyPMobile} />
              <button className={styles.cerrarMenu} onClick={() => setOpenMenu(false)}>
                <img src={cerrarMenuHamburguesaBlanco} alt="Cerrar" />
              </button>
            </div>
            <ul className={styles.menuListMobile}>
              <NavLink to="/inicio" onClick={() => setOpenMenu(false)}>Inicio</NavLink>
              <NavLink to="/nosotros" onClick={() => setOpenMenu(false)}>Nosotros</NavLink>
              <NavLink to="/noticias" onClick={() => setOpenMenu(false)}>Noticias</NavLink>
              <NavLink to="/plan-de-gobierno" onClick={() => setOpenMenu(false)}>Plan de Gobierno</NavLink>
              <NavLink to="/propuestas" onClick={() => setOpenMenu(false)}>Propuestas</NavLink>
              <NavLink to="/contacto" onClick={() => setOpenMenu(false)}>Contacto</NavLink>
            </ul>
            {showHero && title && <h2 className={styles.mobileTitle}>{title}</h2>}
          </nav>
          {!openMenu && showHero && <h2 className={styles.mobileTitleHero}>{title}</h2>}
        </div>
      </div>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  heroClass: PropTypes.string,
  showHero: PropTypes.bool,
};
