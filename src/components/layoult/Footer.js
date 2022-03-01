import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer () {

    return(

            <div className={styles.footer_infos}>
                <div className={styles.footer_redes}>
                    <a href=""><FaFacebookF/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaDiscord/></a>
                 
                 
                </div>

        </div>
    )
}

export default Footer