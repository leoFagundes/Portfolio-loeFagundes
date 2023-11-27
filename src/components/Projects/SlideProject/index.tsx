import style from './SlideProject.module.scss'
import { RiExternalLinkLine } from 'react-icons/ri';
import { RxGithubLogo } from 'react-icons/rx';

export default function SlideProject({currentProjectIndex, currentProject, currentProjectSide, projectList}: {
    currentProjectIndex: number, 
    currentProject: boolean,
    currentProjectSide?: number,
    projectList: {
        imageName: string;
        name: string;
        des: string;
        ling: string;
        link: string;
        demo?: string;
    }[];}) {
    if (!currentProject && currentProjectSide) {
        return (
            <div className={`${currentProjectSide === 1 ? style.leftSlide : style.rightSlide} ${currentProjectIndex === 0 ? style.sideSlide : ''}`}>
                {projectList.map(({imageName, name, des, ling, link, demo}, index) => (
                    <div
                        key={index}
                        className={`${style.item} ${index + currentProjectSide === currentProjectIndex ? style.active : style.hidden}`}
                    >
                            <div className={style.content}>
                                <div className={style.image} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})` }}/>
                                <div className={style.name}>
                                    {name}<br/>
                                    <i style={{fontSize: '13px', color: '#54d489'}}>{ling}</i>
                                </div>
                                <div className={style.description}>
                                    <i>Descrição do projeto {name} oculta momentaneamente.</i>
                                    <div className={style.linksButtons}>
                                        <a href={link} target='_blank'><button type='button'>Repo <RxGithubLogo /></button></a>
                                        {demo ? <a href={demo} target='_blank'><button type='button'>Demo <RiExternalLinkLine /></button></a> : ''}
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        )}
    else {
        return (
            <div className={style.currentSlide}>
                {projectList.map(({imageName, name, des, ling, link, demo}, index) => (
                    <div
                    key={index}
                    className={`${style.item} ${index === currentProjectIndex ? style.active : style.hidden}`}
                    >
                            <div className={style.content}>
                                <div className={style.image} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})` }}/>
                                <div className={style.name}>
                                    {name}<br/>
                                    <i style={{fontSize: '13px', color: '#54d489'}}>{ling}</i>
                                </div>
                                <div className={style.description}>
                                    <i>{des}</i>
                                    <div className={style.linksButtons}>
                                        <a href={link} target='_blank'><button type='button'>Repo <RxGithubLogo /></button></a>
                                        {demo ? <a href={demo} target='_blank'><button type='button'>Demo <RiExternalLinkLine /></button></a> : ''}
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}