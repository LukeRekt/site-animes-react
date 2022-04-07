import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {

    return (

        <div className={styles.footer_infos}>
            <div className={styles.container}>
        <div className={styles.footer_navegacao}>
        <h3>Navegação</h3>
        <a href="/">Home</a>
        <a href="/">Lista</a>
        <a href="/">Calendário</a>
        <a href="/">Github</a>
        </div>
        <div className={styles.footer_parceiros}>
        <h3>Os de vdd</h3>
        <a href="/">Os de vdd 1</a>
        <a href="/">Os de vdd 1</a>
        </div>
            <div className={styles.footer_redes}>
                <h3>Redes Sociais</h3>
                <a href=""><FaFacebookF />Facebook</a>
                <a href=""><FaTwitter />Twitter</a>
                <a href="https://discord.gg/6a4JT3fvrz" target="_blank"><FaDiscord />Discord</a>
            </div>
            <div className={styles.footer_disclamer}>
            <h3>Disclaimer</h3>
            <small>Desenvolvido para testes e nao uso comercial</small>
             </div>
             </div>
        </div>
    )
}

export default Footer