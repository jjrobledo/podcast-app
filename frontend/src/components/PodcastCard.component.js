import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { usePodcastsContext } from "../hooks/usePodcastsContext";

const PodcastCard = ({ podcast }) => {
  const { dispatch } = usePodcastsContext();
  const handleClick = async () => {
    const response = await fetch("/api/podcasts/" + podcast._id, {
      method: "DELETE",
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      dispatch({ type: "DELETE_PODCAST", payload: json });
    }
  };

  return (
    <Card elevation="3" sx={{ height: "100%" }}>
      <CardHeader
        action={
          <IconButton onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        }
        title={podcast.title}
      />
      <Link to={`/${podcast._id}`}>
        <img
          src={podcast.image.url}
          className="card-img-top"
          alt={podcast.title}
        />
      </Link>
      <CardContent>
        <Box>
          <Typography variant="body2">{podcast.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
