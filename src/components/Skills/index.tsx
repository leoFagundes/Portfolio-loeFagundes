import { useState } from 'react';
import Title from '../Title';
import style from './Skills.module.scss';
import { Modal, Button } from 'react-bootstrap';
import SkillsModal from './SkillsModal/SkillsModal';
import { skillsData } from './skillsData';

export type skillProps = {
    name: string
    imgSrc: string
    descricao: string
}

export default function Skills() {
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState<skillProps>()

    const handleClose = () => setShowModal(false);
    const handleShow = ({ name, imgSrc, descricao }: skillProps) => {
        setShowModal(true)
        setModalData({ name, imgSrc, descricao })
    };

    return (
        <section id='Skills' className={style.Skills}>
            <Title titleName='Habilidades' />
            <div className={style.containerSkills}>
                {skillsData.map(({ name, imgSrc, descricao }, index) => (
                    <div onClick={() => handleShow({ name, imgSrc, descricao })} key={`${index + 1} - ${name}`} className={style.skillCard}>
                        <div style={{ backgroundImage: `url("${imgSrc}")`, backgroundPosition: "50% 50%" }} className={style.imgSkillLogo}></div>
                        <h1>{name}</h1>
                    </div>
                ))}
            </div>

            {showModal ? (
                <SkillsModal handleClose={handleClose} modalData={modalData} />
            ) : (
                ''
            )}

        </section>
    );
}