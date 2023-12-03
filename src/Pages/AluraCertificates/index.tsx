import { Fragment } from 'react'
import Title from '../../components/Title'
import style from './AluraCertificates.module.scss'

const aluraCertificates = [
    {
        nome: 'JavaScript para web: crie páginas dinâmicas',
        instituicao: 'Alura',
        horas: '10',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso JavaScript para Web_ Crie páginas dinâmicas - Alura.pdf',
        link: 'assets/img/aluraImages/JavaScript para Web Crie páginas dinâmicas.png',
    },
    {
        nome: 'CSS: FlexBox e Layouts responsivos',
        instituicao: 'Alura',
        horas: '6',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso CSS_ Flexbox e layouts responsivos - Alura.pdf',
        link: 'assets/img/aluraImages/CSS Flexbox e layouts responsivos.png',
    },
    {
        nome: 'React: Desenvolvimento com JavaScript',
        instituicao: 'Alura',
        horas: '14',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso React_ desenvolvendo com JavaScript - Alura.pdf',
        link: 'assets/img/aluraImages/React desenvolvendo com JavaScript.png',
    },
    {
        nome: 'React: Escrevendo com Typescript',
        instituicao: 'Alura',
        horas: '12',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso React_ escrevendo com Typescript - Alura.pdf',
        link: 'assets/img/aluraImages/React escrevendo com Typescript.png',
    },
    {
        nome: 'Tailwind CSS: Estilizando a sua página com classes utilitárias',
        instituicao: 'Alura',
        horas: '8',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso Tailwind CSS_ estilizando a sua página com classes utilitárias - Alura.pdf',
        link: 'assets/img/aluraImages/Tailwind CSS estilizando a sua página com classes utilitárias.png',
    },{
        nome: 'React: comece seu projeto full stack',
        instituicao: 'Alura',
        horas: '12',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso React_ comece seu projeto full stack - Alura.pdf',
        link: 'assets/img/aluraImages/React comece seu projeto full stack.png',
    },{
        nome: 'Git e GitHub: Compartilhando e colaborando em projetos',
        instituicao: 'Alura',
        horas: '8',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso Git e GitHub_ compartilhando e colaborando em projetos - Alura.pdf',
        link: 'assets/img/aluraImages/Git e GitHub compartilhando e colaborando em projetos.png',
    },
]

export default function AluraCertificates() {
    return(
        <section className={style.AluraCertificatesContainer}>
            <Title titleName='Certificados da Alura' />
            <section className={style.certificate}>
                {aluraCertificates.map(({nome, instituicao, horas, ano, linkPdf, link}) => (
                    <a href={linkPdf} key={nome} target='_blank'>
                        <img src={link} alt={nome} />
                    </a>
                ))}
            </section>
        </section>
    )
}