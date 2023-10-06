import React from 'react';
import style from './Button.module.scss';
import { motion } from 'framer-motion';


export default function Button({buttonName, currentProjectIndex, functionButton, src, lastIndex }: { buttonName: 'PrevProjectButton' | 'NextProjectButton', currentProjectIndex: number, functionButton: () => void , src: string, lastIndex?: number}) {
  
    return (
    <div className={style.buttons}>
        <button className={currentProjectIndex === 0 ? (buttonName === 'PrevProjectButton' ? style.firstSlide : '') : (lastIndex && currentProjectIndex === lastIndex) ? style.lastSlide : ''} onClick={functionButton}>
            <motion.img 
                src={src} 
                alt={buttonName}                                   
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            />
        </button>
    </div>
  );
}
