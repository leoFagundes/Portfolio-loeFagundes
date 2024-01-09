import { Fragment } from 'react';
import style from './SocialNetworks.module.scss';

export default function SocialNetworks({ link, image, name, boxShadow = true }: { link: string, image: string, name: string, boxShadow?: boolean }) {
    return (
        <section style={{ boxShadow: boxShadow ? '0px 2px 10px 1px rgba(0, 255, 136, 0.103)' : 'none' }} className={style.container}>
            <a href={link} target='_blank' rel='noreferrer'><img src={image} alt={`${name} link-icon`} /></a>
        </section>
    )
}