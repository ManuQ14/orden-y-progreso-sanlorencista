import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";

export const Navbar = ({ activeClass }) => {
  return (
    <ul className={styles.ul}>
      <NavLink to="/inicio" className={({ isActive }) => (isActive ? activeClass : "")}>
        Inicio
      </NavLink>
      <NavLink to="/nosotros" className={({ isActive }) => (isActive ? activeClass : "")}>
        Nosotros
      </NavLink>
      <NavLink to="/noticias" className={({ isActive }) => (isActive ? activeClass : "")}>
        Noticias
      </NavLink>
      <NavLink to="/plan-de-gobierno" className={({ isActive }) => (isActive ? activeClass : "")}>
        Plan de Gobierno
      </NavLink>
      <NavLink to="/propuestas" className={({ isActive }) => (isActive ? activeClass : "")}>
        Propuestas
      </NavLink>
      <NavLink to="/contacto" className={({ isActive }) => (isActive ? activeClass : "")}>
        Contacto
      </NavLink>
    </ul>
  );
};

Navbar.propTypes = {
  activeClass: PropTypes.string,
};
