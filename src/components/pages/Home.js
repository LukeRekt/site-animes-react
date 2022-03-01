import styles from './Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Animes from '../layoult/Animes'
import Carousel from 'react-elastic-carousel'
import Footer from '../layoult/Footer'

const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 2 },
    {width: 768, itemsToShow: 3 },
    {width: 1200, itemsToShow: 7 },
];

function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://serverdacupula.ddns.net:4000/animes')
        .then(res => {
            setPosts(res.data)
            console.log(res)
        })
    }, [])


return(
    <div>
        <div className={styles.container}>
        <div className={styles.carousel_animes}>
            <h1>TESTE 1</h1>
            <Carousel breakPoints={breakPoints}>
            
                {posts.map(post =>
            <Animes nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodeos}/>
             )} 
        
             
        </Carousel>
        </div>
        <div className={styles.carousel_animes}>
        <h1>TESTE 2</h1>
     
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