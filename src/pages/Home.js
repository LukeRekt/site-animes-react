import styles from './Home.module.css'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Animes from '../components/layoult/Animes/Animes'
import Carousel from 'react-elastic-carousel'
import BotaoInfo from '../components/layoult/BotaoInfo/BotaoInfo'
import EpisodiosHome from '../components/layoult/EpisodiosHome/EpisodiosHome'
import AnimeAssistido from '../components/layoult/AnimeAssistidoPlaceholder/AnimeAssistido'
import { UserContext } from '../UserContext'
import BotaoVerMais from '../components/layoult/BotaoVerMais/VerMais'
import CarouselV2 from '../components/layoult/Carousel/Carousel'

//tudo relacionado a login e seus dependentes nao devem ter prioridade no desenvolvimento.
//prezar pelo funcionamento básico do site

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
];

function Home() {
    const { user } = useContext(UserContext)

    const [posts, setPosts] = useState([])
    const [postsep, setPostsep] = useState([])
    const [episodios, setEpisodiosQuantidade] = useState(5);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim`)
            .then(res => {
                setPosts(res.data.animes)
            })
    }, [])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/todosnovos/${episodios}`)
            .then(res => {
                setPostsep(res.data.episodios)
            })
    }, [episodios])

    return (
        <div>
            <div className={styles.container}>
                
                <div className={styles.botoesTeste}>
                    <p>Lança Hoje!</p>
                    <p>Completos</p>
                    <p>Populares</p>
                </div>
                <div className={styles.carousel_animes}>
                  
                </div>
                <div className={styles.carousel_animes}>
                    <BotaoInfo mensagem='Lançamentos' />
                    <Carousel pagination={false} breakPoints={breakPoints}>
                        {posts.length !== 0 ? (posts.map((post) =>
                            <Animes key={post.id} nome={post.nome} slug={post.slug} id={post.id} imagem={post.imagem} episodeos={post.episodios}/>)) : (<>Carregando</>)}


                    </Carousel>
                </div>
                {user ? (<div className={styles.carousel_animes}>
                    <BotaoInfo mensagem='Continuar reproducao' />
                    <div className={styles.continuarReproducao}>
                   <AnimeAssistido user={user}/>
                   
                     </div>
                  
                     
                </div>) : (<></>)}


                <div className={styles.carousel_animes}>
                    <BotaoInfo mensagem='Últimos Episódios em Lançamento' />

                    <div className={styles.novosEpisodios}>
                    {console.log(posts.length)}
                    {postsep.length !== 0 ? (postsep.map((post, index) =>
                            <EpisodiosHome key={index} nome={post.nome} temporada={post.temporada} id={post.id} anime={post.nomeAnime} imagem={post.animeImagem} numero={post.numero} />)) : (<>Carregando</>)}

                     </div>
                  
                  <BotaoVerMais onClick={() => setEpisodiosQuantidade(episodios + 5)}/>
                </div>
            </div>
            {/* <TopAnimes/> */}


        </div>


    )
}
export default Home