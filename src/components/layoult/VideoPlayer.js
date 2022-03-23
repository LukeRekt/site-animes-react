import React, { useRef } from "react";
import styles from "./VideoPlayer.module.css";
// import video from "./assets/video.mp4";
import { BiPlay, BiPause, BiVolumeFull, BiVolumeMute, BiFullscreen } from "react-icons/bi";
import useVideoPlayer from "../../hooks/useVideoPlayer";



const VideoPlayer = () => {
  const PularAbertura = (tempoAtual) => {
    if(tempoAtual >= 10 && tempoAtual <= 20){
      //console.log(showDiv);
      
      return true
      
    }
    //console.log("bbbbbb");
    
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
  } = useVideoPlayer(videoElement);
  return (
    <div className={styles.container}>
        
      <div className={styles.video_wrapper}>
        <video
          src="https://vfhd.subanimes.biz/videos/stream/animes/dublado/I/Ijiranaide-Nagatoro-san-Dublado/001/720p.mp4"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        {  PularAbertura(playerState.actualTime) ? (<div onClick={(e) => pularAberturaHandler(e)} className={styles.pularAbertura}> <p>PULAR ABERTURA</p></div>) : (<></>)}
        {/* {  playerState.actualTime >= 20 ? (<></>) : (<></>)} */}
        
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
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <p>{formatTime(playerState.totalTime)}</p>
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
          <button className={styles.mute_btn} onClick={toggleFullscreen}><BiFullscreen/> </button>
          
        </div>
      </div>
      
    </div>
  );
};

export default VideoPlayer;