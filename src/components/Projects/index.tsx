import { useState } from 'react';
import Title from '../Title';
import style from './Projects.module.scss';
import Button from './Button';
import SlideProject from './SlideProject';


export default function Projects() {

    const projetos = [
    { 
        imageName: 'assets/img/projects/mybooksleo.png', 
        name: 'MyBooks.leo', 
        des: 'Repositório para visualizar os livros que já li ao longo da minha vida de uma maneira organizada e com sistema de filtro.', 
        ling: 'Next.js, Styled-Components, SCSS', 
        link: 'https://github.com/leoFagundes/MyBooks.leo',
        demo: 'https://mybooksleo.vercel.app/'
    },
    { 
        imageName: 'assets/img/projects/imikino.png', 
        name: 'Aplicação Web - Imikino', 
        des: 'Site criado com o objetivo de avaliar jogos feito para o quinto semestre da faculdade. Possui sistema de login, ranking e avaliação', 
        ling: 'Python (Flask), HTML, CSS, JavaScript, Bootstrap', 
        link: 'https://github.com/leoFagundes/AplicacaoWeb-Imikino',
        demo: 'https://aplicacaoweb-imikino-production.up.railway.app/'
    },
    { 
        imageName: 'assets/img/projects/portfolio2.png', 
        name: 'Portfólio 2.0', 
        des: 'Esse foi o segundo Portfólio que fiz para tentar criar uma versão mais atualizada do portfólio anterior.', 
        ling: 'React, SCSS, HTML', 
        link: 'https://github.com/leoFagundes/Portfolio-leoFagundes',
        demo: 'https://leofagundes.vercel.app/' },
    { 
        imageName: 'assets/img/projects/portfolio1.png', 
        name: 'Portfólio 1.0', 
        des: 'Esse foi o primeiro Portfólio que fiz para ter um lugar onde colocar os meus projetos e falar um pouco mais sobre mim.', 
        ling: 'HTML, CSS, JavaScript', 
        link: 'https://github.com/leoFagundes/Portfolio',
        demo: 'https://portfolioleo-1.netlify.app/' },
    { 
        imageName: 'assets/img/projects/lykke.png', 
        name: 'Aplicação Web - Lykke', 
        des: 'Site que fiz para um projeto da faculdade, é um site que visa a divulgação de ações de bem-estar e recomendações de lugares usando Bootstrap (Google Maps) e LeafFlet.', 
        ling: 'Python (Flask), HTML, CSS', 
        link: 'https://github.com/leoFagundes/AplicacaoWeb-Lykke' },
    { 
        imageName: 'assets/img/projects/lista-tarefas.png', 
        name: 'Lista de Tarefas', 
        des: 'Uma lista de tarefas onde podemos adicionar e excluir post-its, eles se alocam dinamicamente.', 
        ling: 'HTML, CSS, JavaScript', 
        link: 'https://github.com/leoFagundes/Lista-de-Tarefas-JS',
        demo: 'https://lista-tarefas-leo.netlify.app/index.html' },
    { 
        imageName: 'assets/img/projects/rpg.png', 
        name: 'RPG de terminal', 
        des: 'Projeto que fiz para treinar Programação Orientada a Objeto. Fiz um sistema de Dungeons com sistema de loot, inventário, loja, ouro e entre outros.', 
        ling: 'Python', 
        link: 'https://github.com/leoFagundes/RPG-Python' },
    { 
        imageName: 'assets/img/projects/gravity-ball.png', 
        name: 'Gravity Ball', 
        des: 'O objetivo do jogo é não deixar a bolinha cair no chão, porém a dificuldade vai aumentando a cada ponto que você faz. Foi um projeto que fiz para o primeiro semestre da faculdade usando Python.', 
        ling: 'Python - Graphics.py', 
        link: 'https://github.com/leoFagundes/Game-gravity-BALL' },
    { 
        imageName: 'assets/img/projects/cv.png', 
        name: 'Currículo HTML', 
        des: 'Currículo feito para treinar HTML e CSS', 
        ling: 'HTML, CSS', 
        link: 'https://github.com/leoFagundes/CurriculoHTML',
        demo: 'https://cvhtml-2.netlify.app/' },
    { 
        imageName: 'assets/img/projects/comunidade-prog.png', 
        name: 'Comunidade de Programação', 
        des: 'Site com sistema de login em que cada usuário pode postar/editar/excluir comentários sobre esse universo da programação e outros usuários podem postar respostas nesses comentários. Também é possível personalizar seu perfil.', 
        ling: 'Python - Flask, HTML e CSS - Bootstrap', 
        link: 'https://github.com/leoFagundes/AplicacaoWeb-ComunidadeProgramacao' },
    { 
        imageName: 'assets/img/projects/jogo-velha.png', 
        name: 'Jogo da Velha', 
        des: 'Jogo da Velha feito para treinar JavaScript', 
        ling: 'HTML, CSS, JavaScript', 
        link: 'https://github.com/leoFagundes/Jogo-Da-Velha-JS',
        demo: 'https://jogodavelha-leo.netlify.app/' },
    ];

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex((currentProjectIndex + 1) % projetos.length);
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((currentProjectIndex - 1 + projetos.length) % projetos.length);
    };

    const lastIndex = projetos.length - 1;

    return (
        <section id='Projects' className={style.Projects}>
            <Title titleName='Projetos'/>
            <div className={style.projectsContainer}>
                <Button 
                    buttonName='PrevProjectButton'
                    currentProjectIndex={currentProjectIndex}
                    functionButton={handlePrevProject}
                    src='assets/img/left-arrow-white.png'
                />
                <section className={style.slides}>
                    <SlideProject
                        currentProjectSide={1}
                        currentProject={false}
                        currentProjectIndex={currentProjectIndex}
                        projectList={projetos}
                    />
                    <SlideProject
                        currentProject={true}
                        currentProjectIndex={currentProjectIndex}
                        projectList={projetos}
                    />
                    <SlideProject
                        currentProjectSide={-1}
                        currentProject={false}
                        currentProjectIndex={currentProjectIndex}
                        projectList={projetos}
                    />
                </section>
                <Button 
                    buttonName='NextProjectButton'
                    currentProjectIndex={currentProjectIndex}
                    functionButton={handleNextProject}
                    src='assets/img/right-arrow-white.png'
                    lastIndex={lastIndex}
                />
            </div>
        </section>
    )
}