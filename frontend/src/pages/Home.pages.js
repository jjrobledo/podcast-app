import { useEffect } from "react";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import { Grid, Typography } from "@mui/material";
import { Player } from "../components/Player.component";

import PodcastCard from "../components/PodcastCard.component";

const Home = () => {
  const { podcasts, dispatch } = usePodcastsContext();
  // get the user from the useAuthContext hook
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch("/api/podcasts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_PODCASTS", payload: json });
      }
    };

    // if user exists fetch the podcasts
    if (user) {
      fetchPodcasts();
    }
  }, [dispatch, user]);

  return (
    <>
      <Typography variant="h1" sx={{ marginTop: 2 }}>
        Feed:
      </Typography>
      <Grid container spacing={5} sx={{}}>
        {podcasts &&
          podcasts.map((podcast) => (
            <Grid item xs={12} sm={5} lg={3} pr={1}>
              <PodcastCard key={podcast._id} podcast={podcast} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
