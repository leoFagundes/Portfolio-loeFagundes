import React, { useEffect, useRef, useState } from "react";
import Titulo from "../Title";
import style from "./Certificates.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { certificados } from "./certificateData";

function Certificados() {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="Certificates" className={style.Certificates}>
      <Titulo titleName="Certificados" />
      <section className={style.containerCertificates}>
        <div className={style.staticButton}>
          <button>
            <img src="assets/img/left-arrow-white.png" alt="left-arrow" />
          </button>
        </div>
        <motion.div
          ref={carousel}
          className={style.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={style.inner}
            drag="x"
            dragConstraints={{ right: 0, left: -width - 70 }}
          >
            {certificados.map(
              ({ nome, instituicao, horas, ano, link }, index) => (
                <motion.div className={style.itemCarousel} key={index}>
                  <div className={style.certificateTitle}>
                    <h3>{nome}</h3>
                  </div>
                  <div className={style.info}>
                    <p>
                      Instituição: <span>{instituicao}</span>
                    </p>
                    <p>
                      Horas: <span>{horas} horas</span>
                    </p>
                    <p>
                      Ano de Conclusão: <span>{ano}</span>
                    </p>
                  </div>
                  {instituicao != "Alura" ? (
                    <a
                      className={style.pdfLink}
                      target="_blank"
                      rel="noreferrer"
                      href={link}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver certificado
                      </motion.button>
                    </a>
                  ) : (
                    <Link
                      to="Certificados-Alura"
                      className={style.pdfLink}
                      target="_blank"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver certificado
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
        <div className={style.staticButton}>
          <button>
            <img src="assets/img/right-arrow-white.png" alt="right-arrow" />
          </button>
        </div>
      </section>
    </section>
  );
}

export default Certificados;
