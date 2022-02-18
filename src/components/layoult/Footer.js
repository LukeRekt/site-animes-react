import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer () {

    return(
        <div>
            <div className={styles.footer_infos}>
                <h1>Footer</h1>
                <div className={styles.footer_redes}>
                    <a href=""><FaFacebookF/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaDiscord/></a>
                 
                 
                </div>

            </div>
        </div>
    )
}

export default Footer