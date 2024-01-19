import  { useRef } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import styles from "../styles/contacto.module.scss";

export const MainSection = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const confirmMobile = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7o59f95",
        "template_fq54z5t",
        form.current,
        "hygAFy02p41vRx5OK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      confirmButtonColor: "#12233C",
      title: "Mensaje enviado!",
      icon: "success",
    });
    e.target.reset();
  };

  return (
    <>
      {/*Form desktop */}
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.coverDifuminado}></div>
        </div>

        <form ref={form} className={styles.form} onSubmit={confirmMobile}>
          <h3 className={styles.formTitle}>Contactanos</h3>
          <input
            type="text"
            placeholder="Nombre y apellido"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            name="email"
          />
          <input type="number" placeholder="Número de socio" name="number" />
          <input
            type="number"
            placeholder="Teléfono de contacto"
            name="telefono"
          />
          <textarea
            cols="40"
            rows="10"
            placeholder="Escribí tu mensaje"
            required
            name="message"
          ></textarea>
          <input type="submit" value="ENVIAR" />
        </form>
      </div>

      <h2 className={styles.primeroSanLorenzoSiempre}>
        #PrimeroSanLorenzoSiempre
      </h2>
    </>
  );
};
