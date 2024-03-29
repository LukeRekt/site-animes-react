import { useState, useEffect } from "react";

  
 


const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
    actualTime: 0,
    totalTime: 0,
  });

  const pularAberturaHandler = (tempoFim) =>{
    videoElement.current.currentTime = tempoFim
}
const continuarHandler = (tempoFim) =>{
  videoElement.current.currentTime = tempoFim
}
  

  const toggleFullscreen = () => {
    if (videoElement.current) {
            videoElement.current.requestFullscreen();
    }
}


  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const duracao = Math.round((videoElement.current.duration));
    const tempo = Math.round((videoElement.current.currentTime)); 
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
      actualTime: tempo,
      totalTime: duracao,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    console.log("teste" + event.target.value);
    //videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    videoElement.current.currentTime = manualChange;
    console.log("current: " + videoElement.current.currentTime)
    console.log("duration: " + videoElement.current.duration)
    console.log("manualChange: " + manualChange)
    console.log("calculo: " + (videoElement.current.duration / 100) * manualChange)
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
    pularAberturaHandler,
    continuarHandler,
  };
};

export default useVideoPlayer;