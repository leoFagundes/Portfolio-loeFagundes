import style from './Title.module.scss';

export default function Title({titleName}: {titleName: string}) {
    return (
        <div className={style.titleSections}>
            <div className={style.styleDetail}>
                <div></div>
                <div></div>
            </div>
            <h1>{titleName}</h1>
            <div className={style.styleDetail}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}