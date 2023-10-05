import Title from '../Title';
import style from './Skills.module.scss';

export default function Skills() {

    const habilidadesData = [
        {
            name: 'Python',
            imgSrc: 'assets/img/skills/python-logo.png',
            descricao:
            'Python é uma linguagem de programação de alto nível conhecida por sua simplicidade e legibilidade de código. É amplamente utilizada no desenvolvimento web, ciência de dados, automação, inteligência artificial e muito mais.',
        },
        {
            name: 'Flask',
            imgSrc: 'assets/img/skills/flask-logo.png',
            descricao:
            'O Flask é um framework web em Python conhecido por sua simplicidade e facilidade de uso. Ele é amplamente utilizado para desenvolver aplicações web leves e rápidas. Com sua abordagem minimalista, o Flask permite que os desenvolvedores construam rapidamente APIs RESTful, pequenos sites e aplicativos web com código legível e eficiente.',
        },
        {
            name: 'JavaScript',
            imgSrc: 'assets/img/skills/js-logo.png',
            descricao:
            'JavaScript (JS) é uma linguagem de programação de alto nível que permite adicionar interatividade e comportamento dinâmico a sites e aplicativos web. É uma das principais tecnologias para o desenvolvimento web front-end.',
        },
        {
            name: 'React',
            imgSrc: 'assets/img/skills/react-logo.png',
            descricao:
            'React é uma biblioteca JavaScript para a criação de interfaces de usuário (UI). Ela é usada para desenvolver aplicativos web interativos e reativos, facilitando a construção de componentes reutilizáveis.',
        },
        {
            name: 'HTML',
            imgSrc: 'assets/img/skills/html-logo.png',
            descricao:
            'HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo de páginas da web. Ele define a estrutura do documento, como cabeçalhos, parágrafos, links e elementos de formulário.',
        },
        {
            name: 'CSS',
            imgSrc: 'assets/img/skills/css-logo2.png',
            descricao:
            'CSS (Cascading Style Sheets) é usado para estilizar páginas da web, controlando a aparência e o layout dos elementos HTML. Ele permite a criação de designs atraentes e responsivos.',
        },
        {
            name: 'SQL',
            imgSrc: 'assets/img/skills/sql-logo2.png',
            descricao:
            'SQL (Structured Query Language) é uma linguagem de consulta usada para gerenciar e manipular bancos de dados relacionais. É essencial para armazenar, recuperar e gerenciar dados de forma eficiente.',
        },
    ];

    return (
        <section id='Skills' className={style.Skills}>
            <Title titleName='Habilidades'/>
            <div className={style.containerSkills}>|
                {habilidadesData.map(({name, imgSrc, descricao}, index) => (
                <div key={name}>
                    <img src={imgSrc} className={style.imgSkillLogo} alt={name} />
                    <p>{descricao}</p>
                </div>
                ))}
            </div>
        </section>
    )
}