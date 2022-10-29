import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import usePlayer from "../hooks/usePlayer.hook";
import { PlayIcon } from "./PlayIcon.component";

const PodCastList = ({ podcast }) => {
  const { playPodcast } = usePlayer();

  const handleClickPlay = () => {
    playPodcast(podcast.enclosure.url);
  };

  return (
    <Card sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={podcast.image?.url}
        alt={podcast.title}
      />
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <PlayIcon
          handleClickPlay={handleClickPlay}
          id={podcast.enclosure.url}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {podcast.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {podcast.subtitle || podcast.title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );

  /*     <Grid item>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        sx={{ marginTop: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {podcast.title} -
            {formatDistanceToNow(new Date(podcast.pubDate), {
              addSuffix: true,
            })}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{parse(podcast.description)}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  ); */
};

export default PodCastList;
