import styles from './Home.module.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Animes from '../layoult/Animes'
import Carousel from 'react-elastic-carousel'
import BotaoInfo from '../layoult/BotaoInfo'
import EpisodiosHome from '../layoult/EpisodiosHome'

//tudo relacionado a login e seus dependentes nao devem ter prioridade no desenvolvimento.
//prezar pelo funcionamento básico do site
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 },
];

function Home() {
    

    const [posts, setPosts] = useState([])
    const [postsep, setPostsep] = useState([])
    useEffect(() => {
        axios.get('http://179.55.91.159:3232/getanim')
            .then(res => {
                setPosts(res.data.animes)
            })
    }, [])


    useEffect(() => {
        axios.get('http://179.55.91.159:3232/getanim/episodios/todos')
            .then(res => {
                setPostsep(res.data.episodios)
            })
    }, [])

    return (
        <div>
            <div className={styles.container}>
                
                {/* <h1>Ola {user && <span>{user}</span>} {" "}</h1> */}
                <div className={styles.botoesTeste}>
                    <p>Lança Hoje!</p>
                    <p>Completos</p>
                    <p>Populares</p>
                </div>
                <div className={styles.carousel_animes}>
                    <BotaoInfo mensagem='Lançamentos' />
                    <Carousel pagination={false} breakPoints={breakPoints}>

                        {posts.map(post =>
                            <Animes key={post.id} nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodios} />
                        )}


                    </Carousel>
                </div>
                <div className={styles.carousel_animes}>
                    <BotaoInfo mensagem='Últimos Episódios em Lançamento' />
                    {/* <Carousel pagination={false} breakPoints={breakPoints}>

                        {posts.map(post =>
                            <Animes key={post.id} nome={post.nome} id={post.id} imagem={post.imagem} episodeos={post.episodios} />
                        )}


                    </Carousel> */}
                    <div className={styles.novosEpisodios}>
                    {postsep.map(post =>
                            <EpisodiosHome key={post.numero} nome={post.nome} id={post.id} anime={post.nomeAnime} imagem={post.animeImagem} numero={post.numero} />
                            )}
                     </div>

                </div>
            </div>
            {/* <TopAnimes/> */}


        </div>


    )
}
export default Home