import { useState, useEffect, useRef } from "react";
import styles from "../styles/candidatos.module.scss";

// Dummy data for the candidates
const candidatesData = [
  {
    id: 1,
    name: "Marcelo Culotta",
    role: "Presidente",
    fullDescription: "Amplia experiencia en medios y publicidad en el sector privado. Referente de la Vuelta a Boedo, participó en la SCH desde 2006 hasta su salida en 2016, ya como Jefe de Prensa. Tuvo un rol activo en la recuperación de la plaza Lorenzo Massa, la Ley de Restitución Histórica y Rezonificación, además de la Oficina de Atención al Socio y el Polideportivo Pando. Fundador de OyP y candidato en 2023, en 2025 renunció para generar la acefalía y, como vocal opositor de primera minoría, promovió acciones judiciales que forzaron la convocatoria a CD y el fin del mandato de Moretti.",
    photo: "/images/candidatos/1.jpg"
  },
  {
    id: 2,
    name: "Juan Manuel Campos",
    role: "Vicepresidente",
    fullDescription: "Con experiencia empresarial en el rubro de la construcción y el acero, Juan Manuel es Licenciado en X y miembro fundador de Todo x San Lorenzo, una agrupación joven creada en 2024.",
    photo: "/images/candidatos/2.jpg"
  },
  {
    id: 3,
    name: "Juan Bautista Castagna",
    role: "Vocal  N°1",
    fullDescription: "Abogado con experiencia en el sector privado y miembro fundador de Orden y Progreso. Apoderado Legal de la agrupación desde 2022.",
    photo: "/images/candidatos/3.jpg"
  },
  {
    id: 4,
    name: "Aríel Dean",
    role: "Vocal  N°2",
    fullDescription: "Licenciado en Ciencias Políticas. Miembro de la Comisión Fiscalizadora del club y fundador de la agrupación Actitud San Lorenzo.",
    photo: "/images/candidatos/4.jpg"
  },
  {
    id: 5,
    name: "Ana Bozzano",
    role: "Vocal  N°3",
    fullDescription: "Docente",
    photo: "/images/candidatos/5.jpg"
  },
  {
    id: 6,
    name: "Hernán Etman",
    role: "Vocal  N°4",
    fullDescription: "Abogado y ex vicepresidente del CASLA. Fue parte de la reestructuración del club tras la acefalía de 2012, finalizando su mandato en 2013.",
    photo: "/images/candidatos/6.jpg"
  },
  {
    id: 7,
    name: "Gonzalo Campos",
    role: "Vocal  N°5",
    fullDescription: "Profesional con más de 20 años en Fintech. Lic. en Administración (UBA), Maestría en Finanzas (CEMA) y Fintech (ITBA).",
    photo: "/images/candidatos/7.jpg"
  },
  {
    id: 8,
    name: "Pedro Criscolo",
    role: "Vocal  N°6",
    fullDescription: "Fundador de la agrupación Lorenzo Vive e impulsor del tratamiento de la expulsión de Marcelo Moretti a través del Tribunal de Ética.",
    photo: "/images/candidatos/8.jpg"
  },
  {
    id: 9,
    name: "Oscar Alejandro Moreira",
    role: "Vocal  N°7",
    fullDescription: "",
    photo: "/images/candidatos/9.jpg"
  },
  {
    id: 10,
    name: "Claudia Da Costa Díaz",
    role: "Vocal  N°8",
    fullDescription: "Escritora y directora de medios audiovisuales.",
    photo: "/images/candidatos/10.jpg"
  },
  {
    id: 11,
    name: "Daniel Rotella",
    role: "Vocal  N°9",
    fullDescription: "Contador.",
    photo: "/images/candidatos/11.jpg"
  },
  {
    id: 12,
    name: "Maximiliano Ferreira",
    role: "Vocal  N°10",
    fullDescription: "Abogado, cofundador del estudio T&F. Miembro de Todo x San Lorenzo.",
    photo: "/images/candidatos/12.jpg"
  },
  {
    id: 13,
    name: "Silvana Maidana",
    role: "Vocal  N°11",
    fullDescription: "",
    photo: "/images/candidatos/13.jpg"
  },
  {
    id: 14,
    name: "Lucas Rajoy",
    role: "Vocal  N°12",
    fullDescription: "",
    photo: "/images/candidatos/14.jpg"
  },
  {
    id: 15,
    name: "Guillermo Mangone",
    role: "Vocal  N°13",
    fullDescription: "Secretario General de la Federación de Trabajadores de la Industria del Gas Natural de la República Argentina (FETIGNRA).",
    photo: "/images/candidatos/15.jpg"
  },
  {
    id: 16,
    name: "Tomás González Cordásco",
    role: "Vocal  N°14",
    fullDescription: "Parte de la Dirección de Seguridad del Senado de la Nación. Miembro de Actitud San Lorenzo.",
    photo: "/images/candidatos/16.jpg"
  },
  {
    id: 17,
    name: "Diego Espinosa Godoy",
    role: "Vocal  N°15",
    fullDescription: "Abogado y docente universitario, impulsó judicialmente, junto con Marcelo Culotta, la convocatoria a reunión de CD para declarar la acefalía.",
    photo: "/images/candidatos/17.jpg"
  },
  {
    id: 18,
    name: "Mariano Achile",
    role: "Vocal  N°16",
    fullDescription: "",
    photo: "/images/candidatos/18.jpg"
  },
  {
    id: 19,
    name: "Mariana Vilaseco",
    role: "Vocal  N°17",
    fullDescription: "",
    photo: "/images/candidatos/19.jpg"
  },
  {
    id: 20,
    name: "Gustavo Fernández Quiroz",
    role: "Vocal  N°18",
    fullDescription: "Contador",
    photo: "/images/candidatos/20.jpg"
  }
];

export const Main = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const openModal = (candidate) => {
    // FUNCIÓN DESACTIVADA TEMPORALMENTE - Descomentar cuando esté la info completa
    // setSelectedCandidate(candidate);
    // document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.sectionTitle}>Candidatos</h2>

      <div className={styles.timeline}>
        {/* Central Line */}
        <div className={styles.centralLine}></div>

        {candidatesData.map((candidate, index) => (
          <div
            key={candidate.id}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            ref={(el) => (elementsRef.current[index] = el)}
          >
            <div className={styles.dot}></div>

            <div className={styles.card} /* onClick={() => openModal(candidate)} */>
              <div className={styles.cardImageContainer}>
                <img 
                  src={candidate.photo} 
                  alt={candidate.name} 
                  className={styles.cardImage} 
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{candidate.name}</h3>
                <h4 className={styles.cardRole}>{candidate.role}</h4>
                <p className={styles.cardDescription}>{candidate.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <div className={styles.modalBody}>
              <img 
                src={selectedCandidate.photo} 
                alt={selectedCandidate.name} 
                className={styles.modalImage} 
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className={styles.modalInfo}>
                <h3 className={styles.modalName}>{selectedCandidate.name}</h3>
                <h4 className={styles.modalRole}>{selectedCandidate.role}</h4>
                <p className={styles.modalText}>
                  {selectedCandidate.description}
                  <br /><br />
                  {selectedCandidate.fullDescription || `Aquí se incluirá más información detallada sobre la trayectoria, propuestas específicas y el valor que aporta ${selectedCandidate.name} a la agrupación y al futuro del club.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
