import Title from '../Title';
import style from './AboutMe.module.scss';

export default function AboutMe() {
    return (
        <section id='AboutMe' className={style.AboutMe}>
            <Title titleName='Sobre Mim'/>
            <div className={style.conteudoSobreMim}>
                <p>
                Me chamo Leonardo Cantieri Taube Fagundes, nasci em Brasília.<br/>
                Sou apaixonado por tecnologia e extremamente curioso. Atualmente sou estudante de Ciência da Computação na universidade UniCEUB.<br/>
                Criei alguns projetos pessoais para aprimorar o meu aprendizado e nessa jornada até aqui me encontrei na área de programação. Desde então, continuo me aprofundando e me especializando no assunto e espero, um dia, poder ver a tecnologia mudar o mundo que conhecemos hoje!<br/><br/>
                <a href='https://cvhtml-2.netlify.app/' target='_blank' rel="noreferrer">Veja meu currículo aqui!</a>
                </p>
                <div className={style.animation}>
                
                    <img className={`${style.rotateRight} ${style.image}`} src='assets/img/1.png' alt='animation-image' />
                    <img className={`${style.rotateLeft} ${style.blurImage}`}  src='assets/img/1.png' alt='animation-image' />

                    <img className={`${style.rotateLeft} ${style.image}`}  src='assets/img/2.png' alt='animation-image' />
                    <img className={`${style.rotateRight} ${style.blurImage}`}  src='assets/img/2.png' alt='animation-image' />

                    <img className={`${style.rotateRight} ${style.image}`} src='assets/img/3.png' alt='animation-image' />
                </div>
            </div>
        </section>
    )
}