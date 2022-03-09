import styles from './Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Animes from '../layoult/Animes'
import Carousel from 'react-elastic-carousel'
import BotaoInfo from '../layoult/BotaoInfo'

//tudo relacionado a login e seus dependentes nao devem ter prioridade no desenvolvimento.
//prezar pelo funcionamento básico do site
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