import { useEffect } from "react";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import { Grid, Typography } from "@mui/material";

import PodcastCard from "../components/PodcastCard.component";

const Home = () => {
  const { podcasts, dispatch } = usePodcastsContext();
  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch("/api/podcasts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_PODCASTS", payload: json });
      }
    };

    fetchPodcasts();
  }, [dispatch]);

  return (
    <>
      <Typography variant="h1" sx={{ marginTop: 2 }}>
        Feed:
      </Typography>
      <Grid container spacing={5} sx={{}}>
        {podcasts &&
          podcasts.map((podcast) => (
            <Grid item xs={12} sm={5} lg={3} pr={1}>
              <PodcastCard
                key={podcast._id}
                podcast={podcast}
                /* deletePodcastHandler={deletePodcastHandler} */
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
