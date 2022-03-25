import { useParams, } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './PageEpisode.module.css'
import SeletorEP from '../layoult/SeletorEp';
import VideoPlayer from '../layoult/VideoPlayer';

function PageEpisode() {
 
  function ListEp(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].video;
        }
      }
    }
  }
  function ListNome(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].nome;
        }
      }
    }
  }

  const { id, ep } = useParams();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3232/getanim/episodios/${id}`)
      .then(res => {
        setPosts(res.data.episodios)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      
      <div className={styles.PageAnimeContainer}>
        <VideoPlayer videoLink={ListEp(ep, posts)}/>
        {/* <video src={ListEp(ep, posts)} controls>
        </video> */}
        <div className={styles.container}>
          <p id={styles.maisEps}>MAIS EPISÓDIOS</p>
          <div className={styles.listaEps}>
            <div className={styles.Eps}>
              {posts.map(post =>
                <SeletorEP nome={post.nome} id={post.id} iddois={id} episodio={post.numero} atual={ep} />)}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PageEpisode