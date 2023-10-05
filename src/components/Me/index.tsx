import SocialNetworks from '../SocialNetworks';
import style from './Me.module.scss';

export default function Me() {
    return (
        <section id='Me' className={style.Me}>
            <section>
                <div className={style.nameSection}>
                    <h1>Leonardo Fagundes</h1>
                    <h2>Estudante de Programação</h2>
                    <div className={style.networks}>
                        <SocialNetworks 
                            link='https://github.com/leoFagundes'
                            image='assets/img/social-icons/github.png'
                            name='github'
                        />
                        <SocialNetworks 
                            link='https://www.linkedin.com/in/leonardo-fagundes-5a348a248/'
                            image='assets/img/social-icons/linkedin.png'
                            name='linkedin'
                        />
                        <SocialNetworks 
                            link='https://www.instagram.com/leo.fagundes.50/'
                            image='assets/img/social-icons/instagram.png'
                            name='instagram'
                        />
                    </div>
                </div>
                <div className={style.imageSection}>
                    <div className={style.border}>
                        <img src='assets/img/eu.jpg' className={style.profileImage} alt="me-image" />
                    </div>
                </div>
            </section>
        </section>
    )
}