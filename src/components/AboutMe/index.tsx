import { useState } from 'react';
import Title from '../Title';
import style from './AboutMe.module.scss';
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function AboutMe() {
    const [isAnimating, setIsAnimating] = useState(false);

    function startAnimation() {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

    return (
        <section id='AboutMe' className={style.AboutMe}>
            <Title titleName='Sobre Mim' />
            <div className={style.conteudoSobreMim}>
                <p className={`${isAnimating ? style.secretMessage : ''}`}>
                    Me chamo Leonardo Cantieri Taube Fagundes, nasci em <span>B</span>rasília.<br />
                    Sou apaixonado por tecnologia <span>e</span> extremamente curioso. <span>H</span>oje sou estudante de Ciência da Comput<span>a</span>ção na universidade UniCEUB.<br />
                    Criei alguns <span>p</span>rojetos <span>p</span>essoais para aprimorar o meu aprendizado e nessa jornada até aqui me encontrei na área de programação.
                    Desde então, continuo me aprofundando {isAnimating ? <span>y</span> : 'e'} me especializando {isAnimating ? <span>it</span> : 'no'} assunto e espero, um {isAnimating ? <span>will</span> : 'dia'}, {isAnimating ? <span>work</span> : 'poder'} ver a tecnologia mudar o mundo {isAnimating ? <span>out</span> : 'que'} conhecemos<span>! {isAnimating ? <FaHeart size={10} /> : '  '}</span><br /><br />
                    <a href='https://cvhtml-2.netlify.app/' target='_blank' rel="noreferrer">Veja meu currículo aqui!</a>
                </p>
                <div className={`${style.animation} ${isAnimating ? style.rapidRotate : ''}`} onClick={startAnimation}>
                    <img className={`${style.rotateRight} ${style.image}`} src='assets/img/1.png' alt='animation-image' />
                    <img className={`${style.rotateLeft} ${style.blurImage}`} src='assets/img/1.png' alt='animation-image' />

                    <img className={`${style.rotateLeft} ${style.image}`} src='assets/img/2.png' alt='animation-image' />
                    <img className={`${style.rotateRight} ${style.blurImage}`} src='assets/img/2.png' alt='animation-image' />
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.9 }}
                        className={`${style.focus}`}
                    ></motion.div>
                </div>
            </div>
        </section>
    )
}