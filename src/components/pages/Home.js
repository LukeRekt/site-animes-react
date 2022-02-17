import styles from './Home.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Anime from '../layoult/Animes'
import Carousel from 'react-elastic-carousel'
import TopAnimes from '../layoult/TopAnimes'

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
            <h1>LANÇAMENTOS</h1>
        <Carousel breakPoints={breakPoints}>
        {posts.map(post =>
            <Anime nome={post.nome} imagem={post.imagem}/>
             )} 
        </Carousel>
       
           </div>
           <TopAnimes/>
        </div>
       
    
)
}
export default Home