import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {

    return (

        <div className={styles.footer_infos}>
            <div className={styles.container}>
        <div className={styles.footer_navegacao}>
        <h3>Navegação</h3>
        <a href="/">Home</a>
        <a href="/lista">Lista</a>
        <a href="/calendario">Calendário</a>
        <a href="https://github.com/LukeRekt/site-animes-react">Github</a>
        </div>
        <div className={styles.footer_parceiros}>
        <h3>Parceiros</h3>
        <a href="https://discord.gg/6a4JT3fvrz">Cafézino Animes</a>
        </div>
            <div className={styles.footer_redes}>
                <h3>Redes Sociais</h3>
                <a href=""><FaFacebookF />Facebook</a>
                <a href="https://discord.gg/6a4JT3fvrz" target="_blank"><FaDiscord />Discord</a>
            </div>
            <div className={styles.footer_disclamer}>
            <h3>Disclaimer</h3>
            <small>Desenvolvido para testes e nao uso comercial</small>
             </div>
             </div>
             <div className={styles.footer_small}> 
             <small>By: LukeRekt with ❤</small>
             </div>
        </div>
    )
}

export default Footer