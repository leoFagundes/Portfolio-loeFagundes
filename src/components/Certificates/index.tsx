import React, { useEffect, useRef, useState } from 'react';
import Titulo from '../Title';
import style from './Certificates.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Certificado {
  nome: string;
  instituicao: string;
  horas: string;
  ano: string;
  link: string;
}

function Certificados() {
  const carousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const certificados: Certificado[] = [
    {
      nome: 'Ciência da Computação - Harvard, no Brasil',
      instituicao: 'CC50',
      horas: '70',
      ano: '2022',
      link: 'assets/pdf/CC50.pdf',
    },
    {
      nome: 'Python Impressionador',
      instituicao: 'Hashtag Treinamentos',
      horas: '179',
      ano: '2022',
      link: 'assets/pdf/Python Impressionador - Leonardo Cantieri Taube Fagundes.pdf',
    },
    {
      nome: 'Certificados da Alura',
      instituicao: 'Alura',
      horas: '--',
      ano: '2023>',
      link: '-',
    },
    {
      nome: 'Excel Intermediário - Presencial',
      instituicao: 'Dytz Informática',
      horas: '20',
      ano: '2022',
      link: 'assets/pdf/Certificado Excel.pdf',
    },
    {
      nome: 'Python 3 - Mundo 1',
      instituicao: 'Curso em vídeo',
      horas: '40',
      ano: '2022',
      link: 'assets/pdf/Python-3-Mundo-1-40-Horas-Certificado-Curso-em-Video.pdf',
    },
    {
      nome: 'LAC4 - Segurança da informação',
      instituicao: 'GSI',
      horas: '8',
      ano: '2023',
      link: 'assets/pdf/Certificado - LAC4.pdf',
    },
  ];
  
  return (
    <section id='Certificates' className={style.Certificates}>
        <Titulo titleName="Certificados" />
        <section className={style.containerCertificates}>
            <div className={style.staticButton}>
                <button><img src='assets/img/left-arrow-white.png' alt='left-arrow'/></button>
            </div>
            <motion.div ref={carousel}  className={style.carousel} whileTap={{cursor: 'grabbing'}}>
                <motion.div 
                className={style.inner}
                drag="x"
                dragConstraints={{right: 0, left: -width-70}}
                >
                    {certificados.map(({nome, instituicao, horas, ano, link}, index) => (
                        <motion.div className={style.itemCarousel} key={index}>
                            <div className={style.certificateTitle}>
                                <h3>{nome}</h3>
                            </div>
                            <div className={style.info}>
                                <p>Instituição: <span>{instituicao}</span></p>
                                <p>Horas: <span>{horas} horas</span></p>
                                <p>Ano de Conclusão: <span>{ano}</span></p>
                            </div>
                            {instituicao != 'Alura' ?
                            <a className={style.pdfLink} target='_blank' rel="noreferrer" href={link} >
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  Ver certificado
                                </motion.button>
                            </a>
                            :
                            <Link to='Certificados-Alura' className={style.pdfLink} target='_blank'>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  Ver certificado
                                </motion.button>
                            </Link>
                            }
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className={style.staticButton}>
                <button>
                  <img src='assets/img/right-arrow-white.png' alt='right-arrow'/>
                </button>
            </div>
        </section>
    </section>
  );
}

export default Certificados;
