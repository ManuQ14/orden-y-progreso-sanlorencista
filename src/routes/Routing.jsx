//Imports de React
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

//Imports de las views
import { Home } from "../views/Home/Home";
import { Nosotros } from "../views/Nosotros/Nosotros";
import { Noticias } from "../views/Noticias/Noticias";
import { Noticia } from "../views/Noticias/components/Noticia";
import { Propuestas } from "../views/Propuestas/Propuestas";
import { Propuesta } from "../views/Propuestas/components/Propuesta";
import { Contacto } from "../views/Contacto/Contacto";
import { Error } from "../views/error/Error";
import { Candidatos } from "../views/Candidatos/Candidatos";
import { Plataforma } from "../views/Plataforma/Plataforma";

// Global Footer
import { Footer } from "../components/Footer/Footer";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:url" element={<Noticia />} />
        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/propuestas/:url" element={<Propuesta />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/plan-de-gobierno" element={<Plataforma />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
