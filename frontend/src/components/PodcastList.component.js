import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Grid } from "@mui/material";
import parse from "html-react-parser";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

const PodCastList = ({ podcast, setNowPlaying }) => {
  const handleClickPlay = () => {
    setNowPlaying(podcast.enclosure.url);
  };

  return (
    <Card sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={podcast.image ? podcast.image.url : ""}
        alt={podcast.title}
      />
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <IconButton aria-label="play/pause" onClick={handleClickPlay}>
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
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
            {podcast.title}
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
