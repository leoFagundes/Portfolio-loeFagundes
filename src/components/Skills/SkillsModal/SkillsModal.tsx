import { Fragment } from 'react';
import { skillProps } from '..'
import { projetctData } from '../../Projects/projectsData';
import Title from '../../Title';
import style from './SkillsModal.module.scss'
import { AiOutlineClose } from "react-icons/ai";
import { RiExternalLinkLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';

type Props = {
    handleClose: () => void
    modalData: skillProps | undefined
}

const SkillsModal = ({ handleClose, modalData }: Props) => {
    const projectsData = projetctData

    if (modalData) {
        return (
            <section onClick={handleClose} className={style.modal}>
                <div onClick={e => e.stopPropagation()} className={style.modalBody}>
                    <AiOutlineClose onClick={handleClose} size={25} color='#54d489' className={style.closeIcon} />
                    <div className={style.skillInfo}>
                        <Title titleName={modalData.name} />
                        <div>
                            <p>{modalData.descricao}</p>
                            <img src={modalData.imgSrc} alt={modalData.name + "Img"} className={style.imgSkillLogo} />
                        </div>
                    </div>
                    <div className={style.relatedProjects}>
                        <h1>Projetos Relacionados</h1>
                        <div>
                            {projectsData.map((projectData, index) => (
                                <Fragment key={modalData.name + index}>
                                    {projectData.ling.includes(modalData.name) ? (
                                        <div className={style.projectCard}>
                                            <p>{projectData.name}</p>
                                            <div className={style.linksButtons}>
                                                <a href={projectData.link} target='_blank'><button type='button'>Repo <RxGithubLogo /></button></a>
                                                {projectData.demo ? <a href={projectData.demo} target='_blank'><button type='button'>Demo <RiExternalLinkLine /></button></a> : ''}
                                            </div>
                                        </div>
                                    ) : ''}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        )
    } else {
        return null
    }

}

export default SkillsModal