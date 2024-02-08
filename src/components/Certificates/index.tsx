import style from "./Certificates.module.scss";
import Titulo from "../Title";
import { Certificado, certificados } from "./certificateData";
import { Carousel } from "primereact/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./carousel.css";

export default function index() {
  const responsiveOptions = [
    {
      breakpoint: "3000px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "820px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "630px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const certificateTemplate = (certificate: Certificado) => {
    return (
      <div className={style.certificateCard}>
        <h4 className={style.certificateTitle}>{certificate.nome}</h4>
        <div className={style.info}>
          <p>
            Instituição: <span>{certificate.instituicao}</span>
          </p>
          <p>
            Horas:{" "}
            <span>
              {certificate.horas}{" "}
              {certificate.instituicao !== "Alura" ? "horas" : ""}
            </span>
          </p>
          <p>
            Ano de Conclusão: <span>{certificate.ano}</span>
          </p>
        </div>
        {certificate.instituicao != "Alura" ? (
          <a
            className={style.pdfLink}
            target="_blank"
            rel="noreferrer"
            href={certificate.link}
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
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver certificado
            </motion.button>
          </Link>
        )}
      </div>
    );
  };

  return (
    <section id="Certificates" className={style.Certificates}>
      <Titulo titleName="Certificados" />
      <section className={style.containerCertificates}>
        <Carousel
          value={certificados}
          responsiveOptions={responsiveOptions}
          itemTemplate={certificateTemplate}
          showNavigators
        />
      </section>
    </section>
  );
}
