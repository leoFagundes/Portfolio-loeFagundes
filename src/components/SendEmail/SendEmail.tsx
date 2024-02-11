import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import style from './SendEmail.module.scss'
import Title from '../Title';
import emailjs from "@emailjs/browser"
import SocialNetworks from '../SocialNetworks';
import { Loading } from '../Loading/Loading';

export default function SendEmail() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isNameValid, setIsNameValid] = useState<boolean | null>(true)
    const [isEmailValid, setIsEmailValid] = useState<boolean | null>(true)
    const [isMessageValid, setIsMessageValid] = useState<boolean | null>(true)

    const [isLoading, setIsLoading] = useState(false)

    // Alerta
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [errorAlertText, setErrorAlertText] = useState('');



    useEffect(() => {
        setIsNameValid(name !== '' ? true : null);
    }, [name]);

    useEffect(() => {
        setIsEmailValid(email !== '' ? true : null);
    }, [email]);

    useEffect(() => {
        setIsMessageValid(message !== '' ? true : null);
    }, [message]);

    async function sendEmail(e: React.FormEvent) {
        e.preventDefault();

        setIsNameValid(name === '' ? false : true);
        setIsEmailValid(email === '' ? false : true);
        setIsMessageValid(message === '' ? false : true);

        if (name === '' || email === '' || message === '') {
            return;
        }

        try {
            setIsLoading(true);
            const templateParams = {
                from_name: name,
                message: message,
                email: email
            };

            const response = await emailjs.send("service_c7h51ab", "template_oyyaw83", templateParams, "SIMSqB4eHRWnaQaui");
            console.log("E-mail enviado:", response.status, response.text);
            const nameToAlert = name;
            setName('');
            setEmail('');
            setMessage('');
            setIsNameValid(true);
            setIsEmailValid(true);
            setIsMessageValid(true);

            // Mostra o Alerta
            setShowAlert(true);
            setAlertText(`Obrigado por entrar em contato, ${nameToAlert}!`);
            setIsLoading(false);
        } catch (error) {
            console.log("Erro ao enviar o e-mail: ", error);
            setShowErrorAlert(true);
            setErrorAlertText('Erro ao enviar o e-mail.');
            setIsLoading(false);
        }
    }

    return (
        <section className={style.sendEmailContainer}>
            <Title titleName='Contato' />
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    {alertText}
                </Alert>
            )}
            {showErrorAlert && (
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                    {errorAlertText}
                </Alert>
            )}
            <section>
                {isLoading
                    ?
                    <div className={style.loading}>
                        <Loading />
                        <p>Enviando email...</p>
                    </div>
                    :
                    <form className={style.form} onSubmit={sendEmail}>
                        <div className={style.containerField}>
                            <input
                                className={isNameValid || isNameValid == null ? style.textField : style.invalidField}
                                type="text"
                                placeholder={isNameValid || isNameValid == null ? 'Digite seu nome' : 'Nome Inválido'}
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className={style.containerField}>
                            <input
                                className={isEmailValid || isEmailValid == null ? style.textField : style.invalidField}
                                type="text"
                                placeholder={isEmailValid || isEmailValid == null ? 'Digite seu email' : 'Email Inválido'}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div className={style.containerField}>
                            <textarea
                                className={isMessageValid || isMessageValid == null ? style.textField : style.invalidField}
                                placeholder={isMessageValid || isMessageValid == null ? 'Digite sua mensagem...' : 'Mensagem Inválida'}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                rows={5}
                            />
                        </div>

                        <input className={style.button} type="submit" value="Enviar" />
                    </form>
                }
                <div className={style.rightContent}>
                    <div>
                        <h1>Email</h1>
                        <a href="mailto:leofagundes2015@gmail.com">
                            <p>leofagundes2015@gmail.com</p>
                        </a>
                    </div>
                    <div>
                        <h1>Redes Sociais</h1>
                        <div className={style.networks}>
                            <SocialNetworks
                                link='https://github.com/leoFagundes'
                                image='assets/img/social-icons/github.png'
                                name='github'
                                boxShadow={false}
                            />
                            <SocialNetworks
                                link='https://www.linkedin.com/in/leonardo-fagundes-5a348a248/'
                                image='assets/img/social-icons/linkedin.png'
                                name='linkedin'
                                boxShadow={false}
                            />
                            <SocialNetworks
                                link='https://www.instagram.com/leo.fagundes.50/'
                                image='assets/img/social-icons/instagram.png'
                                name='instagram'
                                boxShadow={false}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
