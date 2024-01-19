//Imports de React

import { Routes, Route, Navigate, Link, HashRouter } from "react-router-dom";

//import assets para el footer
/* import EscudoFooter from "../assets/EscudoOyP.svg"; */
import EscudoFooter from "../assets/EscudoOyP.svg";
import separatedLine from "../assets/icons/separated-line.svg";
import facebookIconFooter from "../assets/icons/facebook icon footer.svg";
import youtubeIconFooter from "../assets/icons/youtube icon footer.svg";
import instagramIconFooter from "../assets/icons/Instagram icon.svg";
import twitterIconFooter from "../assets/icons/Twitter icon.svg";
import tikTokIconFooter from "../assets/icons/tiktok-icon.svg";

//import assets withe for the footer
import facebookIconFooterWhite from "../assets/icons/whiteIconsMedia/facebook icon footer white.svg";
import youtubeIconFooterWhite from "../assets/icons/whiteIconsMedia/youtube icon footer white.svg";
import instagramIconFooterWhite from "../assets/icons/whiteIconsMedia/Instagram icon white.svg";
import twitterIconFooterWhite from "../assets/icons/whiteIconsMedia/Twitter icon white.svg";
import tiktokIconFooterWhite from "../assets/icons/whiteIconsMedia/tiktok-icon white.svg";

//Imports de las views
import { Home } from "../views/Home/Home";
/* import { LaVuelta } from "../views/LaVuelta/LaVuelta";
import { NoticiaVuelta } from "../views/LaVuelta/components/NoticiaVuelta"; */
import { Nosotros } from "../views/Nosotros/Nosotros";
import { Noticias } from "../views/Noticias/Noticias";
import { Noticia } from "../views/Noticias/components/Noticia";
import { Propuestas } from "../views/Propuestas/Propuestas";
import { Propuesta } from "../views/Propuestas/components/Propuesta";
import { Contacto } from "../views/Contacto/Contacto";

import { Error } from "../views/error/Error";
import { Plataforma } from "../views/Plataforma/Plataforma";

export const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:url" element={<Noticia />} />

        {/* <Route path="/la-vuelta" element={<LaVuelta />} />
        <Route path="/la-vuelta/:url" element={<NoticiaVuelta />} /> */}



        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/propuestas/:url" element={<Propuesta />} />

        {/* url a plan de gobierno */}
        <Route path="/plan-de-gobierno" element={<Plataforma />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/*" element={<Error />} />
      </Routes>

      <footer>
        <div className="contenedorEscudo">
          <img src={EscudoFooter} alt="Escudo" id="EscudoFooter" />
        </div>
        <ul className="listaFooter">
          <Link to="/inicio">Inicio</Link>         
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/plan-de-gobierno">Plan de Gobierno</Link>
          <Link to="/propuestas">Propuestas</Link>
          <Link to="/contacto">Contacto</Link>
        </ul>

        <div className="contenedorRedes">
          <img src={separatedLine} alt="" id="separatedLine" />
          <div className="contenedorTitleAndIconos">
            <span className="titleSeguinos">Seguinos en</span>
            <ul className="contenedorIconosRedes">
              <a
                href="https://www.facebook.com/OrdenYProgresoSanlorencista"
                target="_blank"
                rel="noreferrer"
                className="iconsMedia"
                alt="Link a Facebook"
              >
                {/* <img src={facebookIconFooter} alt="" /> */}
                <img src={facebookIconFooterWhite} alt="Link a Facebook" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCzGABab9xZ4dyhDx3SZzvag/featured"
                target="_blank"
                rel="noreferrer"
                className="iconsMedia"
                alt="Link a Youtube"
              >
                {/* <img src={youtubeIconFooter} alt="" /> */}
                <img src={youtubeIconFooterWhite} alt="icon media youtube" />
              </a>
              <a
                href="https://www.instagram.com/oypsanlorencista/"
                target="_blank"
                rel="noreferrer"
                className="iconsMedia"
                alt="Link a Instagram"
              >
                {/* <img src={instagramIconFooter} alt="" /> */}
                <img src={instagramIconFooterWhite} alt="Link a instagram" />
              </a>
              <a
                href="https://twitter.com/OyPSL"
                target="_blank"
                rel="noreferrer"
                className="iconsMedia"
                alt="Link a Twitter"
              >
                {/* <img src={twitterIconFooter} alt="" /> */}
                <img src={twitterIconFooterWhite} alt="Link a twitter" />
              </a>
              <a
                href="https://www.tiktok.com/@oypsl"
                target="_blank"
                rel="noreferrer"
                className="iconsMedia"
                alt="Link a Tik Tok"
              >
                {/* <img src={tikTokIconFooter} alt="" /> */}
                <img src={tiktokIconFooterWhite} alt="Link a tik tok" />
              </a>
            </ul>
          </div>
        </div>
      </footer>

      {/*Footer mobile */}
      <div className="footerMobile">
        <ul className="listaFooter">
          <div className="subListContainer">
            <Link to="/inicio">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/noticias">Noticias</Link>
          </div>
          <div className="subListContainer">
            {/* <Link to="/la-vuelta">La Vuelta</Link> */}
            <Link to="/plan-de-gobierno" >Plan de Gobierno</Link>
            <Link to="/propuestas">Propuestas</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </ul>

        <div className="secondContainer">
          <div className="contenedorEscudo">
            <img src={EscudoFooter} alt="" id="EscudoFooter" />
          </div>
          <div className="contenedorRedes">
            <div className="contenedorTitleAndIconos">
              <span className="titleSeguinos">Seguinos en</span>
              <ul className="contenedorIconosRedes">
                <a
                  href="https://www.facebook.com/OrdenYProgresoSanlorencista"
                  target="_blank"
                  rel="noreferrer"
                  className="iconsMedia"
                  alt="Link a Facebook"
                >
                  <img src={facebookIconFooter} alt="Link a facebook" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCzGABab9xZ4dyhDx3SZzvag/featured"
                  target="_blank"
                  rel="noreferrer"
                  className="iconsMedia"
                  alt="Link a Youtube"
                >
                  <img src={youtubeIconFooter} alt="Link a Youtube" />
                </a>
                <a
                  href="https://www.instagram.com/oypsanlorencista/"
                  target="_blank"
                  rel="noreferrer"
                  className="iconsMedia"
                  alt="Link a Instagram"
                >
                  <img src={instagramIconFooter} alt="Link a Instagram " />
                </a>
                <a
                  href="https://twitter.com/OyPSL"
                  target="_blank"
                  rel="noreferrer"
                  className="iconsMedia"
                  alt="Link a Twitter"
                >
                  <img src={twitterIconFooter} alt="Link a Twitter" />
                </a>
                <a
                  href="https://www.tiktok.com/@oypsl"
                  target="_blank"
                  rel="noreferrer"
                  className="iconsMedia"
                  alt="Link a Tik Tok"
                >
                  <img src={tikTokIconFooter} alt="Link a Tik Tok" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};
