import style from './Hamburguer.module.scss'

export default function Hamburguer({ isOpen, toggleMenu }: {isOpen: Boolean, toggleMenu: Function}) {
    const handleClick = () => {
        toggleMenu();
    };

    return (
        <div className={`${style.hamburguer} ${isOpen ? style.open : style.close}`} onClick={handleClick}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
        </div>
    )
}