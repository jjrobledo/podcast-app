import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import usePlayer from "../hooks/usePlayer.hook";

const PlayIcon = ({ handleClickPlay, id }) => {
  const { playing, url } = usePlayer();

  return (
    <IconButton id={id} aria-label="play/pause" onClick={handleClickPlay}>
      {url() === id && playing() ? (
        <PauseIcon sx={{ height: 38, width: 38 }} />
      ) : (
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      )}
    </IconButton>
  );
};

export { PlayIcon };
