import { useState } from 'react';
import styles from './AdicionarEp.module.css'

function AdicionarEp(){
    return (
        <div>
            <form>
        <input type="text"  placeholder='Nome'/>
        <input type="text" placeholder='Video'/>
        <input type="text" placeholder='Anime Imagem'/>
        <input type="text" placeholder='Video Dublado'/>
        <input type="text" placeholder='Inicio Abertura'/>
        <input type="text" placeholder='Fim Abertura'/>
        <button>Enviar</button>
            </form>

        </div>
    )
                
            

}
export default AdicionarEp