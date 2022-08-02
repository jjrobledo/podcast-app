import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Grid } from "@mui/material";
import parse from "html-react-parser";

const PodCastList = ({ podcast }) => {
  return (
    <Grid item>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p>asdfsdf</p>
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
  );
};

export default PodCastList;
