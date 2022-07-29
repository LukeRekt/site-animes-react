import { Link, useParams, } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './PageEpisode.module.css'
import SeletorEP from '../../components/layoult/SeletorEp/SeletorEp';
import VideoPlayer from '../../components/layoult/VideoPlayer/VideoPlayer';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFlag, BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
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
  function ListDub(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].videoDublado;
        }
      }
    }
  }
  function inicioAbertura(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].inicioAbertura;
        }
      }
    }
  }
  function fimAbertura(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].fimAbertura;
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
  function ListImage(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].animeImagem;
        }
      }
    }
  }
  function ListNomeAnime(parametros, postsa) {
    for (var i = 0; i < postsa.length; i++) {

      if (postsa[i].id == id) {
        if (postsa[i].numero == parametros) {
          return postsa[i].nomeAnime;
        }
      }
    }
  }

  const {temporada, id, ep } = useParams();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getanim/episodios/${temporada}/${id}`)
      .then(res => {
        setPosts(res.data.episodios)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      
      <div className={styles.PageAnimeContainer}>
        <VideoPlayer inicioAbertura={inicioAbertura(ep, posts)}
         fimAbertura={fimAbertura(ep, posts)}
          videoLink={ListEp(ep, posts)}
           videoDub={ListDub(ep, posts)}
           nomeEp={ListNome(ep, posts)}
           idAnim={id}
           temporada={temporada}
           episodio={ep}
           animeImagem={ListImage(ep, posts)}
           nomeAnime={ListNomeAnime(ep, posts)}
           />
                {/* <video src={ListEp(ep, posts)} controls>

        </video> */}
        
        <div className={styles.container}>
          <p id={styles.maisEps}>Episódios</p>
          <div className={styles.buscarEp}>
            <AiOutlineFileSearch/>
            <input type="text" placeholder='Ir para o episódio' />
          </div>
          <div className={styles.listaEps}>
            <div className={styles.Eps}>
              {posts.map(post =>
                <SeletorEP nome={post.nome} id={post.id} iddois={id} temporada={post.temporada} episodio={post.numero} atual={ep} />)}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BaixoContainer}>
                <div className={styles.baixoEpisodios}>
                  <div className={styles.ListarEps}>
                  <Link to={`/anime/${id}`}><p> <GiHamburgerMenu/></p></Link>
                  <Link to={`/anime/${id}/${temporada}/${parseInt(ep) + 1}`}><p>PRÓXIMO <BiRightArrowAlt/></p>
                  </Link>
                  </div>
                  
                  
                  <div className={styles.UtilEpisodios}>
                  <Link to="">
                    <p><BsFlag/> REPORTAR</p>
                    <p><AiOutlineClockCircle/></p>
                    </Link>
                  </div>
                </div>
      </div>
      <div className={styles.CometariosContainer}>
                    <div id={styles.botaoComentarios}>
                    <p><BsFillChatDotsFill/>Comentários</p>
                    </div>
        
        <div className={styles.secaoComentarios}>
          <div className={styles.InputComentario}>
            
          <img src="http://localhost:3232/static/imagens/avatars/LukeRekt.jpg" alt="" />
          <p>LukeRekt</p>
          <div className={styles.InputComentarioIn}>
            <textarea name="a" id="" cols="110" rows="4"></textarea></div>
            <p><IoSend/>Enviar</p>
          </div>

          <div className={styles.comentario}>
            <div className={styles.comentarioHeader}>
            <img src="http://localhost:3232/static/imagens/avatars/LukeRekt.jpg" alt="" />
            <p>LukeRekt <small>• 1 dia atrás</small></p>
            </div>
                <div className={styles.comentarioTexto}>
                  <p>Simplesmente o anime mais bosta de todos. Simplesmente o anime mais bosta de todos. Simplesmente o anime mais bosta de todos. Simplesmente o anime mais bosta de todos. Simplesmente o anime mais bosta de todos.Simplesmente o anime mais bosta de todos.</p>
                  
                </div>
          </div>


                
          <div className={styles.comentario}>
            <div className={styles.comentarioHeader}>
            <img src="https://cdn.discordapp.com/avatars/464489936037609483/0cdbcb9f780eabb784353f4afa691221.png?size=512" alt="" />
            <p>Pec <small>• 1 Hora atrás</small></p>
            </div>
                <div className={styles.comentarioTexto}>
                  <p>fofo</p>
                  
                </div>
          </div>

        </div>
        
        </div>
    </div>

  )
}

export default PageEpisode