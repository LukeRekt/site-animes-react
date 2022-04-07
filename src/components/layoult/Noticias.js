import styles from './Noticias.module.css'
import React, { useState} from 'react'
import { RiCloseFill } from "react-icons/ri";
function Noticias() {

    const [noticias, setNoticias] = useState(true)

    return (
        <div>
            {noticias ? (<> <div className={styles.noticias}> 
            <div className={styles.topBar}>
            <h4>Boa Noite, Zap!</h4>
            <RiCloseFill onClick={() => setNoticias(false)}/>
            </div>
                <h5>Não sabe como assistir? <a href="">CLIQUE AQUI</a> e aprenda agora mesmo 🍙</h5>
                <p>Esta assistindo pelo celular e está sendo redirecionado para o twitter? Não sabe o que fazer? <a href="">CLIQUE AQUI</a> e aprenda agora mesmo como resolver 📛</p>
                <p>Equipe ZapAnimes 📞</p>
                <p>👾 Discord</p>
                <p>📷 Instagram</p>
                <p>🐦 Twitter</p>
            </div>
            </>) : (<></>)}
           
        </div>
    )
}
export default Noticias