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
        link: 'assets/img/aluraImages/Leonardo Fagundes - Curso JavaScript para Web_ Crie páginas dinâmicas - Alura.png',
    },
    {
        nome: 'CSS: FlexBox e Layouts responsivos',
        instituicao: 'Alura',
        horas: '6',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso CSS_ Flexbox e layouts responsivos - Alura.pdf',
        link: 'assets/img/aluraImages/Leonardo Fagundes - Curso CSS_ Flexbox e layouts responsivos - Alura.png',
    },
    {
        nome: 'React: Desenvolvimento com JavaScript',
        instituicao: 'Alura',
        horas: '14',
        ano: '2023',
        linkPdf: 'assets/pdf/Curso React_ desenvolvendo com JavaScript - Alura.pdf',
        link: 'assets/img/aluraImages/Curso React_ desenvolvendo com JavaScript - Alura.png',
    },
    {
        nome: 'React: Escrevendo com Typescript',
        instituicao: 'Alura',
        horas: '12',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso React_ escrevendo com Typescript - Alura.pdf',
        link: 'assets/img/aluraImages/Leonardo Fagundes - Curso React_ escrevendo com Typescript - Alura.png',
    },
    {
        nome: 'Tailwind CSS: Estilizando a sua página com classes utilitárias',
        instituicao: 'Alura',
        horas: '8',
        ano: '2023',
        linkPdf: 'assets/pdf/Leonardo Fagundes - Curso Tailwind CSS_ estilizando a sua página com classes utilitárias - Alura.pdf',
        link: 'assets/img/aluraImages/Leonardo Fagundes - Curso Tailwind.png',
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