import { useState } from "react";
import Title from "../Title";
import style from "./Projects.module.scss";
import Button from "./Button";
import SlideProject from "./SlideProject";
import { projetctData } from "./projectsData";

export default function Projects() {
  const projetos = projetctData

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projetos.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(
      (currentProjectIndex - 1 + projetos.length) % projetos.length
    );
  };

  const lastIndex = projetos.length - 1;

  return (
    <section id="Projects" className={style.Projects}>
      <Title titleName="Projetos" />
      <div className={style.projectsContainer}>
        <Button
          buttonName="PrevProjectButton"
          currentProjectIndex={currentProjectIndex}
          functionButton={handlePrevProject}
          src="assets/img/left-arrow-white.png"
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
          buttonName="NextProjectButton"
          currentProjectIndex={currentProjectIndex}
          functionButton={handleNextProject}
          src="assets/img/right-arrow-white.png"
          lastIndex={lastIndex}
        />
      </div>
    </section>
  );
}
