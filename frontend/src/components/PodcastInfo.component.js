import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import RssFeedIcon from "@mui/icons-material/RssFeed";

export default function PodcastInfo({ podcastInfo }) {
  console.log(podcastInfo);
  return (
    <Card sx={{ minWidth: 275, marginTop: 5, marginBottom: 5 }}>
      <CardContent>
        <CardMedia
          component="img"
          image={podcastInfo?.image?.url}
          alt={podcastInfo?.name}
          sx={{ width: 250, height: 250 }}
        />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {podcastInfo?.subtitle}
        </Typography>
        <Typography variant="h5" component="div">
          {podcastInfo?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <HomeIcon />
          <VolunteerActivismIcon />
          <RssFeedIcon />
        </Typography>
        <Typography variant="body2">{podcastInfo?.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
