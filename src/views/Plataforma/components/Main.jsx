import styles from "../styles/plataforma.module.scss";
import { Link } from "react-router-dom";
/* import { useNavigate } from "react-router-dom"; */

/* import boton from "../../../assets/images/Boton.jpg"; */

export const Main = () => {
 /*  const navigate = useNavigate(""); */

  /*  const handleButtonToPDF = () => {
    navigate(
      "https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view?usp=sharing"
    ); */

 /*  const handleButtonToPDF = () => {
    navigate(
      (window.location.href =
        "https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view?usp=sharing")
    );
  }; */

  return (
    <>
      {/* <Document file={PDF} options={{ workerSrc: "/pdf.worker.js" }}>
        <Page pageNumber={1}></Page>
      </Document> */}
      <div className={styles.mainContent}>
        <h1 className={styles.mainTitlePlatform}>Plan de Gobierno</h1>
        <Link
          className={styles.buttonToPDF}
          to="https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view?usp=sharing"
          target="_blank"
        >
         Mirá el plan de gobierno acá
        </Link>

         

     

          {/* <a className={styles.buttonToPDF} href="https://drive.google.com/file/d/1B7PX24GTecqPlbTjKVm02Uf8zRw--3l9/view?usp=sharing" target="_blanc">
          Mirá el plan de Gobierno acá
        </a> */}
      </div>
    </>
  );
};
