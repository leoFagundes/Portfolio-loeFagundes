import style from './SlideProject.module.scss'

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
    }[];}) {
    if (!currentProject && currentProjectSide) {
        return (
            <div className={`${currentProjectSide === 1 ? style.leftSlide : style.rightSlide} ${currentProjectIndex === 0 ? style.sideSlide : ''}`}>
                {projectList.map(({imageName, name, des, ling, link}, index) => (
                    <div
                        key={index}
                        className={`${style.item} ${index + currentProjectSide === currentProjectIndex ? style.active : style.hidden}`}
                    >
                        <a href={link} target='_blank' rel="noreferrer">
                            <div className={style.content}>
                                <div className={style.image} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})` }}/>
                                <div className={style.name}>
                                    {name}<br/>
                                    <i style={{fontSize: '13px', color: '#54d489'}}>{ling}</i>
                                </div>
                                <div className={style.description}><i>Descrição do projeto {name} oculta momentaneamente.</i></div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )}
    else {
        return (
            <div className={style.currentSlide}>
                {projectList.map(({imageName, name, des, ling, link}, index) => (
                    <div
                    key={index}
                    className={`${style.item} ${index === currentProjectIndex ? style.active : style.hidden}`}
                    >
                        <a href={link} target='_blank' rel="noreferrer">
                            <div className={style.content}>
                                <div className={style.image} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imageName})` }}/>
                                <div className={style.name}>
                                    {name}<br/>
                                    <i style={{fontSize: '13px', color: '#54d489'}}>{ling}</i>
                                </div>
                                <div className={style.description}><i>{des}</i></div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}