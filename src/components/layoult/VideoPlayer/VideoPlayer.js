import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoPlayer.module.css";
// import video from "./assets/video.mp4";
import { BiPlay, BiPause, BiVolumeFull, BiVolumeMute, BiFullscreen } from "react-icons/bi";
import useVideoPlayer from "../../../hooks/useVideoPlayer";
import axios from "axios";
import { useContext } from "react"
import { UserContext } from '../../../UserContext'


const VideoPlayer = (props) => {

  const [linkVideo, setLinkVideo] = useState(props.videoLink);
  const [tempoSalvo, setTempoSalvo] = useState();
  const [tempoPimba, setPimba] = useState(0);
  const { user } = useContext(UserContext);

  const videoContainer = document.getElementById('video-container');
  function toggleFullScreena(pimba) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (pimba.webkitRequestFullscreen) {
      // Need this to support Safari
      pimba.webkitRequestFullscreen();
    } else {
      pimba.requestFullscreen();
    }
  }

  const PularAbertura = (tempoAtual) => {
    if(tempoAtual >= props.inicioAbertura && tempoAtual <= props.fimAbertura){
      return true
    }
    return false;
  }
  const ContinuarAnime = () => {
     if(tempoSalvo){
      return true
    }
    return false;
  
  }


    //https://stackoverflow.com/questions/4605342/how-to-format-html5-audios-currenttime-property-with-javascript
    function formatTime(seconds) {
       let minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
      }

  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    toggleFullscreen,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    pularAberturaHandler,
    continuarHandler,
  } = useVideoPlayer(videoElement);
 

  useEffect(() => {
    const variables = {
      nomeUsuario: user,
      temporadaAnime: props.temporada,
      episodioAnime: props.episodio,
      idAnime: props.idAnim,
      tempoTotal: playerState.totalTime,
      nomeEp: props.nomeEp,
      animeImagem: props.animeImagem,

    
    }
    if(user){
      axios.post(`${process.env.REACT_APP_API_URL}/getprogresso`,  variables, { withCredentials: true })
      .then(res => {
           setTempoSalvo(res.data.tempoAtual)
          // setCarregandoFavoritos(false)
      })
    }
    
}, [user, props.nomeEp, props.animeImagem])

  function foo(state, tempo) {
    let variablesUpdate = {
      nomeUsuario: user,
      temporadaAnime: props.temporada,
      episodioAnime: props.episodio,
      idAnime: props.idAnim,
      tempoAtual: tempo,
      tempoTotal: playerState.totalTime,
      nomeEp: props.nomeEp,
      nomeAnime: props.nomeAnime    
    }
    console.log(state, tempo)
    if (state == true){
    
    axios.post(`${process.env.REACT_APP_API_URL}/updateprogresso`,  variablesUpdate, { withCredentials: true })
    .then(res => {
        // setCarregandoFavoritos(false)
    })
    }else{
      console.log("video parado", state)
    }
  }
 
  useEffect(() => {

    if(user){
      console.log(user,props.temporada, props.episodio)
      if(playerState.actualTime >= tempoPimba){
        foo(playerState.isPlaying, playerState.actualTime)
        setPimba(playerState.actualTime + 10)
      }
    }
    
    
    const interval = setInterval(() => {
      
      if(playerState.isPlaying){
      
    }
    }, 5000);
  
    return () => clearInterval(interval);
  }, [playerState.isPlaying, playerState.actualTime, tempoPimba, user, props.nomeAnime]);


  function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    //seek.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    //seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    //const rect = video.getBoundingClientRect();
    //seekTooltip.style.left = `${event.pageX - rect.left}px`;
  }
  return (
    
    <div className={styles.container}>
         <div className={styles.SeletorLinguagem}>     
   <div className={styles.Legendado} onClick={() => {setLinkVideo(`${process.env.REACT_APP_API_URL}/${props.videoLink}`)}}>
            <p>Legendado</p>
          </div>
          <div className={styles.Dublado} onClick={() => {setLinkVideo(`${process.env.REACT_APP_API_URL}/${props.videoDub}`)}}>
            <p>Dublado</p>
          </div>
        </div>
      <div id="video-container" className={styles.video_wrapper}>
      
        <video
          src={linkVideo}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
         {  PularAbertura(playerState.actualTime) ? (<div onClick={(e) => pularAberturaHandler(props.fimAbertura)} className={styles.pularAbertura}> <p>PULAR ABERTURA</p></div>) : (<></>)} 
        {  user ? (ContinuarAnime() && playerState.actualTime < 20 && playerState.actualTime > 1 ? (<div onClick={(e) => {continuarHandler(tempoSalvo); setPimba(tempoSalvo)}} className={styles.continuarAnime}> <p>Continuar Reprodução</p></div>) : (<></>)) : (<></>)}
        {/* {  playerState.actualTime >= 20 ? (<></>) : (<></>)} */}
        
        <div className={styles.controls_wrap}>
          
        <div className={styles.controls}>
          <div className={styles.actions}>
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className={`${styles.bx} ${styles.bx_play}`}><BiPlay fontSize="30px"/></i>
              ) : (
                <i className={`${styles.bx} ${styles.bx_pause}`}><BiPause fontSize="30px"/></i>
              )}
            </button>
            
          </div>
          <p>{formatTime(playerState.actualTime)}</p>
          <progress id={styles.progress_bar} value={Math.round(playerState.actualTime)} min="0" max={Math.round(playerState.totalTime)} onChange={console.log("mudou")} ></progress>
          <input class={styles.seek} id={styles.seek} value={Math.round(playerState.actualTime)} min="0" type="range" step="1" max={Math.round(playerState.totalTime)} onMouseOver={(e) => updateSeekTooltip(e)} onChange={(e) => {handleVideoProgress(e); setPimba(playerState.actualTime)}} />
          <div class={styles.seek_tooltip} id={styles.seek_tooltip}>{formatTime(playerState.actualTime)}</div>
          <p>{formatTime(playerState.totalTime)}</p>
          {console.log(Math.round(playerState.actualTime))}
          <select
            className={styles.velocity}
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          
         
          <button className={styles.mute_btn} onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className={`${styles.bx} ${styles.bxs_volume_full}`}><BiVolumeFull/></i>
            ) : (
              <i className={`${styles.bx} ${styles.bxs_volume_mute}`}><BiVolumeMute/></i>
            )}
          </button>
          <button className={styles.mute_btn} onClick={(e) => toggleFullScreena(videoContainer)}><BiFullscreen/> </button>
          
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default VideoPlayer;