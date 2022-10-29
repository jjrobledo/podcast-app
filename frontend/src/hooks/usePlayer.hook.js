import { useContext } from "react";
import { PlayerContext } from "../context/Player.context";

const usePlayer = () => {
  const [state, setState] = useContext(PlayerContext);

  function playPodcast(episodeURL) {
    if (episodeURL === state.currentEpisodeURL) {
      togglePlayPause();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio();
      state.audioPlayer.src = episodeURL;
      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentEpisodeURL: episodeURL,
        isPlaying: true,
      }));
    }
  }

  const playing = () => {
    return state.isPlaying;
  };

  const url = () => {
    return state.currentEpisodeURL;
  };

  const togglePlayPause = () => {
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));

    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
  };
  /* 
  function togglePlayPause() {
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  } */
  return {
    togglePlayPause,
    playPodcast,
    playing,
    url,
  };
};

export default usePlayer;
