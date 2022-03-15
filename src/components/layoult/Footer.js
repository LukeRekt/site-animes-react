import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {

    return (

        <div className={styles.footer_infos}>
            <div className={styles.footer_redes}>
                <p>REDES SOCIAIS</p>
                <a href=""><FaFacebookF/>Facebook</a>
                <a href=""><FaTwitter />Twitter</a>
                <a href=""><FaDiscord />Discord</a>
                <small>Desenvolvido para testes e nao uso comercial</small>

            </div>
            <div className={styles.footer_infos}>
                
            </div>

        </div>
    )
}

export default Footer