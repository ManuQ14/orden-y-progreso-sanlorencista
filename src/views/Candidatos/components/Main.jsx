import { useState, useEffect, useRef } from "react";
import styles from "../styles/candidatos.module.scss";

// Dummy data for the candidates
const candidatesData = [
  {
    id: 1,
    name: "Marcelo Culotta",
    role: "Presidente",
    description: "Socio refundador, dedicado toda la vida a San Lorenzo y uno de los principales impulsores de la Vuelta a Boedo.",
    fullDescription: "Amplia experiencia en medios y publicidad en el sector privado. Referente de la Vuelta a Boedo, participó en la SCH desde 2006 hasta su salida en 2016, ya como Jefe de Prensa. Tuvo un rol activo en la recuperación de la plaza Lorenzo Massa, la Ley de Restitución Histórica y Rezonificación, además de la Oficina de Atención al Socio y el Polideportivo Pando. Fundador de OyP y candidato en 2023, en 2025 renunció para generar la acefalía y, como vocal opositor de primera minoría, promovió acciones judiciales que forzaron la convocatoria a CD y el fin del mandato de Moretti.",
    photo: "https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" // Placeholder or actual image
  },
  {
    id: 2,
    name: "Juan Manuel Campos",
    role: "Vicepresidente 1°",
    description: "Empresario exitoso, fundador de Despegar. Aporta su vasta experiencia en gestión y administración de grandes organizaciones.",
    fullDescription: "Con experiencia empresarial en el rubro de la construcción y el acero, Juan Manuel es Licenciado en X y miembro fundador de Todo x San Lorenzo, agrupación creada en 2024 y fuertemente posicionada en contra del gobierno de Marcelo Moretti.",
    photo: "https://oypsanlorencista.com/images/notas/comunicado-orden-y-progreso-sanlorencista/1.jpg" // Placeholder
  },
  {
    id: 3,
    name: "Juan Bautista Castagna",
    role: "Secretario",
    description: "Miembro fundamental del equipo con amplia trayectoria en relaciones institucionales.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Aríel Dean",
    role: "Vocal N° 3",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    name: "Candidato Cinco",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    name: "Candidato Seis",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 7,
    name: "Candidato Siete",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 8,
    name: "Candidato Ocho",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 9,
    name: "Candidato Nueve",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 10,
    name: "Candidato Diez",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 11,
    name: "Candidato Once",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 12,
    name: "Candidato Doce",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 13,
    name: "Candidato Trece",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 14,
    name: "Candidato Catorce",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 15,
    name: "Candidato Quince",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 16,
    name: "Candidato Dieciseis",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 17,
    name: "Candidato Trece",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 18,
    name: "Candidato Trece",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 19,
    name: "Candidato Trece",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
  },
  {
    id: 20,
    name: "Candidato Trece",
    role: "Secretario",
    description: "Especialista en temas administrativos y legales del club.",
    photo: "https://via.placeholder.com/150"
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
    setSelectedCandidate(candidate);
    document.body.style.overflow = "hidden";
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

            <div className={styles.card} onClick={() => openModal(candidate)}>
              <div className={styles.cardImageContainer}>
                <img src={candidate.photo} alt={candidate.name} className={styles.cardImage} />
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
              <img src={selectedCandidate.photo} alt={selectedCandidate.name} className={styles.modalImage} />
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
