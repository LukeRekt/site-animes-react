import { useState } from 'react'
import styles from './Carousel.module.css'





function CarouselV2 (){
    const [position, setPosition] = useState(0);
    var PassarFrente = () => {
        setPosition(position - 898) ;
        }
    return <div className={styles.container}>
        <div style={{marginLeft: position}} className={styles.rotationControler}>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/poster.webp'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/animes/isekai-ojisan/poster.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/animes/shine-post/Assistir-todos-episodios-Shine-Post-online-legendado-full-hd-subanimes-brasil-2022.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        <div className={styles.episodio}>
            <img className={styles.imagem} src='http://localhost:3232/static/imagens/assets/capasanimes/nagatoro.jpg'/>
        </div>
        
        </div>
        <button onClick={PassarFrente}>MUDAR</button>
    </div>
}

export default CarouselV2