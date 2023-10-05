import { Fragment } from 'react';
import style from './SocialNetworks.module.scss';

export default function SocialNetworks({link, image, name}: {link: string, image: string, name: string}) {
    return (
        <section className={style.container}>
            <a href={link} target='_blank' rel='noreferrer'><img src={image} alt={`${name} link-icon`}/></a>
        </section>
    )
}