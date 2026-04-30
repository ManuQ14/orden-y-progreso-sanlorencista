import { Link } from "react-router-dom";
import EscudoFooter from "../../assets/EscudoOyP.svg";
import separatedLine from "../../assets/icons/separated-line.svg";
import facebookIconFooterWhite from "../../assets/icons/whiteIconsMedia/facebook icon footer white.svg";
import youtubeIconFooterWhite from "../../assets/icons/whiteIconsMedia/youtube icon footer white.svg";
import instagramIconFooterWhite from "../../assets/icons/whiteIconsMedia/Instagram icon white.svg";
import twitterIconFooterWhite from "../../assets/icons/whiteIconsMedia/Twitter icon white.svg";
import tiktokIconFooterWhite from "../../assets/icons/whiteIconsMedia/tiktok-icon white.svg";
import facebookIconFooter from "../../assets/icons/facebook icon footer.svg";
import youtubeIconFooter from "../../assets/icons/youtube icon footer.svg";
import instagramIconFooter from "../../assets/icons/Instagram icon.svg";
import twitterIconFooter from "../../assets/icons/Twitter icon.svg";
import tikTokIconFooter from "../../assets/icons/tiktok-icon.svg";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contenedorEscudo}>
          <img src={EscudoFooter} alt="Escudo" id="EscudoFooter" className={styles.escudoFooter} />
        </div>
        <ul className={styles.listaFooter}>
          <Link to="/inicio">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/plan-de-gobierno">Plan de Gobierno</Link>
          <Link to="/propuestas">Propuestas</Link>
          <Link to="/contacto">Contacto</Link>
        </ul>

        <div className={styles.contenedorRedes}>
          <img src={separatedLine} alt="" id="separatedLine" className={styles.separatedLine} />
          <div className={styles.contenedorTitleAndIconos}>
            <span className={styles.titleSeguinos}>Seguinos en</span>
            <ul className={styles.contenedorIconosRedes}>
              <a href="https://www.facebook.com/OrdenYProgresoSanlorencista" target="_blank" rel="noreferrer" className={styles.iconsMedia}>
                <img src={facebookIconFooterWhite} alt="Facebook" />
              </a>
              <a href="https://www.youtube.com/channel/UCzGABab9xZ4dyhDx3SZzvag/featured" target="_blank" rel="noreferrer" className={styles.iconsMedia}>
                <img src={youtubeIconFooterWhite} alt="Youtube" />
              </a>
              <a href="https://www.instagram.com/oypsanlorencista/" target="_blank" rel="noreferrer" className={styles.iconsMedia}>
                <img src={instagramIconFooterWhite} alt="Instagram" />
              </a>
              <a href="https://twitter.com/OyPSL" target="_blank" rel="noreferrer" className={styles.iconsMedia}>
                <img src={twitterIconFooterWhite} alt="Twitter" />
              </a>
              <a href="https://www.tiktok.com/@oypsl" target="_blank" rel="noreferrer" className={styles.iconsMedia}>
                <img src={tiktokIconFooterWhite} alt="TikTok" />
              </a>
            </ul>
          </div>
        </div>
      </footer>

      {/* Footer Mobile */}
      <div className={styles.footerMobile}>
        <ul className={styles.listaFooterMobile}>
          <div className={styles.subListContainer}>
            <Link to="/inicio">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/noticias">Noticias</Link>
          </div>
          <div className={styles.subListContainer}>
            <Link to="/plan-de-gobierno">Plan de Gobierno</Link>
            <Link to="/propuestas">Propuestas</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </ul>

        <div className={styles.secondContainer}>
          <div className={styles.contenedorEscudoMobile}>
            <img src={EscudoFooter} alt="" className={styles.escudoFooterMobile} />
          </div>
          <div className={styles.contenedorRedesMobile}>
            <div className={styles.contenedorTitleAndIconosMobile}>
              <span className={styles.titleSeguinosMobile}>Seguinos en</span>
              <ul className={styles.contenedorIconosRedesMobile}>
                <a href="https://www.facebook.com/OrdenYProgresoSanlorencista" target="_blank" rel="noreferrer">
                  <img src={facebookIconFooter} alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/channel/UCzGABab9xZ4dyhDx3SZzvag/featured" target="_blank" rel="noreferrer">
                  <img src={youtubeIconFooter} alt="Youtube" />
                </a>
                <a href="https://www.instagram.com/oypsanlorencista/" target="_blank" rel="noreferrer">
                  <img src={instagramIconFooter} alt="Instagram" />
                </a>
                <a href="https://twitter.com/OyPSL" target="_blank" rel="noreferrer">
                  <img src={twitterIconFooter} alt="Twitter" />
                </a>
                <a href="https://www.tiktok.com/@oypsl" target="_blank" rel="noreferrer">
                  <img src={tikTokIconFooter} alt="TikTok" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
