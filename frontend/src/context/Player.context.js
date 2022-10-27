import { createContext, useState } from "react";

const PlayerContext = createContext([{}, () => {}]);

const PlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    isPlaying: false,
    currentEpisodeURL: null,
  });

  return (
    <PlayerContext.Provider value={[state, setState]}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext, PlayerProvider };
/* import { createContext, useRef, useState, useEffect } from "react";

const PlayerContext = createContext([{}, () => {}]);

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = "";
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  console.log(duration);

  const audioPlayer = new Audio();
  audioPlayer.src = audioSrc;
  audioPlayer.preload = "metadata";

  const progressBar = useRef();

  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.duration);
    setDuration(seconds);
    progressBar.max = seconds;
  }, [audioPlayer?.loadedmetadata, audioPlayer?.readyState]);

  const calcTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!isPlaying);
    if (!prevValue) {
      audioPlayer.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.value = audioPlayer.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.currentTime = progressBar.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.style.setProperty(
      "--seek-before-width",
      `${(progressBar.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.value);
  };

  const backThirty = () => {
    progressBar.value = Number(progressBar.value) - 30;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.value = Number(progressBar.value) + 30;
    changeRange();
  };

  console.log(audioPlayer);
  return (
    <PlayerContext.Provider
      value={[
        isPlaying,
        setIsPlaying,
        audioPlayer,
        audioSrc,
        setAudioSrc,
        togglePlayPause,
        backThirty,
        forwardThirty,
        calcTime,
        currentTime,
        changeRange,
        duration,
      ]}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
 */
