import Hamburguer from './Hamburguer';
import style from './NavBar.module.scss';
import React, { useState } from 'react';


export default function NavBar() {

    const menuItens = [
        {anchor: 'Me', name: 'Início', icon: 'assets/img/nav-icons/casa-branca.png'},
        {anchor: 'AboutMe', name: 'Sobre mim', icon: 'assets/img/nav-icons/programador.png'},
        {anchor: 'Projects', name: 'Projetos', icon: 'assets/img/nav-icons/projetos.png'},
        {anchor: 'Skills', name: 'Habilidades', icon: 'assets/img/nav-icons/habilidades.png'},
        {anchor: 'Certificates', name: 'Certificados', icon: 'assets/img/nav-icons/certificado.png'},
    ]

    const [isOpen, setOpen] = useState(false) 

    const toggleMenu = () => {
      const elemento = document.getElementsByClassName(style.menuItensIcon)[0];
      if (!isOpen) {
        elemento.classList.remove(style.unshow);
        elemento.classList.add(style.show);
      } else {
        elemento.classList.remove(style.show);
        elemento.classList.add(style.unshow);
      }
      setOpen(!isOpen);
      console.log(isOpen)
    }

    const handleSmoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          {/*Calcula a posição final ajustando o deslocamento*/}
          const finalPosition = targetElement.offsetTop - 70;
      
          {/*Executa a rolagem suave para a posição final*/}
          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth',
          });
        }
      };

    return (
        <nav className={style.navbar}>
            <div>
                <h3>/*</h3>
                <h2>Portfolio</h2>
                <h3>*/</h3>
            </div>
            <ul className={style.menuItens}>
                {menuItens.map(({anchor, name, icon}, index) => (
                    <li key={index}><a onClick={() => handleSmoothScroll(anchor)}>{name}</a></li>
                ))}
            </ul>

            <section className={`${style.menuItensIcon}`}>
                <ul>
                    {menuItens.map(({anchor, name, icon}, index) => (
                        <li key={index}><a onClick={() => handleSmoothScroll(anchor)}><img src={icon} alt={`${name}-icon`}/></a></li>
                    ))}
                </ul>
            </section>
            <section className={style.hamburguerSection }>
                <Hamburguer isOpen={isOpen} toggleMenu={toggleMenu} />
            </section>
        </nav>
    )
}