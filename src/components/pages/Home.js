import styles from './Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Animes from '../layoult/Animes'
import Carousel from 'react-elastic-carousel'
import BotaoInfo from '../layoult/BotaoInfo'


const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 2 },
    {width: 768, itemsToShow: 3 },
    {width: 1200, itemsToShow: 7 },
];

function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/animes')
        .then(res => {
            setPosts(res.data)
            console.log(res)
        })
    }, [])


return(
    <div>
        <div className={styles.container}>
            <div className={styles.noticias}>
                <h4>Boa Noite, Zap!</h4>
                <p>Não sabe como assistir? CLIQUE AQUI e aprenda agora mesmo 🍙</p>
                <p>Esta assistindo pelo celular e está sendo redirecionado para o twitter? Não sabe o que fazer? CLIQUE AQUI e aprenda agora mesmo como resolver 📛</p>
                <p>Quer assistir sem protetor? Veja agora mesmo o nosso premium com um valor simbólico para estar ajudando o site, para saber mais CLIQUE AQUI💎</p>
                <p>Equipe ZapAnimes 📞</p>
                <p>👾 Discord</p>
                <p>📷 Instagram</p>
                <p>🐦 Twitter</p>
            </div>
        <div className={styles.carousel_animes}>
            <BotaoInfo mensagem='ÚLTIMOS LANÇAMENTOS'/>
            <Carousel breakPoints={breakPoints}>
            
                {posts.map(post =>
            <Animes nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodeos}/>
             )} 
        
             
        </Carousel>
        </div>
        <div className={styles.carousel_animes}>
        <BotaoInfo mensagem='OS MAI BRABO DA CENA'/>
        <Carousel breakPoints={breakPoints}>
            
                {posts.map(post =>
            <Animes nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodeos}/>
             )} 
        
             
        </Carousel>
        </div>
           </div>
           {/* <TopAnimes/> */}

           
        </div>
       
    
)
}
export default Home