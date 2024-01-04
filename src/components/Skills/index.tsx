import { useState, useRef } from 'react';
import Title from '../Title';
import style from './Skills.module.scss';
import SkillsModal from './SkillsModal/SkillsModal';
import { skillsData } from './skillsData';

export type skillProps = {
    name: string;
    imgSrc: string;
    descricao: string;
};

export default function Skills() {
    const skillsSectionRef = useRef<HTMLDivElement | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState<skillProps>();

    const handleClose = () => setShowModal(false);
    const handleShow = ({ name, imgSrc, descricao }: skillProps) => {
        setShowModal(true);
        setModalData({ name, imgSrc, descricao });

        // Scroll into the center of the Skills section
        if (skillsSectionRef.current) {
            skillsSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <section ref={skillsSectionRef} id='Skills' className={style.Skills}>
            <Title titleName='Habilidades' />
            <div className={style.containerSkills}>
                {skillsData.map(({ name, imgSrc, descricao }, index) => (
                    <div
                        onClick={() => handleShow({ name, imgSrc, descricao })}
                        key={`${index + 1} - ${name}`}
                        className={style.skillCard}
                    >
                        <div style={{ backgroundImage: `url("${imgSrc}")`, backgroundPosition: '50% 50%' }} className={style.imgSkillLogo}></div>
                        <h1>{name}</h1>
                    </div>
                ))}
            </div>

            {showModal ? <SkillsModal handleClose={handleClose} modalData={modalData} /> : ''}
        </section>
    );
}
