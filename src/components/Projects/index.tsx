import { useState } from "react";
import Title from "../Title";
import style from "./Projects.module.scss";
import Button from "./Button";
import SlideProject from "./SlideProject";
import { projetctData } from "./projectsData";

export default function Projects() {
  const projetos = projetctData

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [classByButtonClicked, setClassByButtonClicked] = useState<'prevClicked' | 'nextClicked' | null>(null)

  const handleNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projetos.length);
    setClassByButtonClicked('nextClicked')
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(
      (currentProjectIndex - 1 + projetos.length) % projetos.length
    );
    setClassByButtonClicked('prevClicked')
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
            classByButtonClicked={classByButtonClicked}
          />
          <SlideProject
            currentProject={true}
            currentProjectIndex={currentProjectIndex}
            projectList={projetos}
            classByButtonClicked={classByButtonClicked}
          />
          <SlideProject
            currentProjectSide={-1}
            currentProject={false}
            currentProjectIndex={currentProjectIndex}
            projectList={projetos}
            classByButtonClicked={classByButtonClicked}
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
