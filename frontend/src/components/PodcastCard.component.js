import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import CardMedia from "@mui/material/CardMedia";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import { useAuthContext } from "../hooks/useAuthContext.hook";

const PodcastCard = ({ podcast }) => {
  const { dispatch } = usePodcastsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    const response = await fetch("/api/podcasts/" + podcast._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      dispatch({ type: "DELETE_PODCAST", payload: json });
    }
  };

  return (
    <Card>
      <CardHeader
        /*         sx={{ minHeight: 125, minWidth: 250 }}
         */ action={
          <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        }
        title={podcast.title}
        subheader={
          podcast.lastBuildDate
            ? formatDistanceToNow(new Date(podcast.lastBuildDate), {
                addSuffix: true,
              })
            : formatDistanceToNow(new Date(podcast.episodes[0].pubDate), {
                addSuffix: true,
              })
        }
      />
      <Link to={`/${podcast._id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="250"
          image={podcast.image.url}
          alt={podcast.title}
        />
        <CardContent>
          <Box sx={{ height: 75, overflow: "auto" }}>
            <Typography variant="body2" color="text.secondary">
              {podcast.description}
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PodcastCard;
